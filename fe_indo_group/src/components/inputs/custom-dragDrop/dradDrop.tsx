// components/formik/FileUploadField.tsx
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useField, useFormikContext } from "formik";
import {
  Box,
  Typography,
  IconButton,
  Paper,
  List,
  ListItem,
  ListItemText,
  FormHelperText,
} from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import DeleteIcon from "@mui/icons-material/Delete";
import { theme } from "../../../constants/theme";

const ACCEPTED_FORMATS = {
  "application/pdf": [],
  "application/msword": [],
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [],
  "image/png": [],
  "image/jpeg": [],
  "image/webp": [],
};

interface FileUploadFieldProps {
  name: string;
  label?: string;
}

const FileUploadField: React.FC<FileUploadFieldProps> = ({ name, label }) => {
  const [field, meta, helpers] = useField(name);
  const { setFieldTouched } = useFormikContext();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const files = acceptedFiles.length ? [acceptedFiles[0]] : [];
      helpers.setValue(files);
      setFieldTouched(name, true);
    },
    [helpers, name, setFieldTouched]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: ACCEPTED_FORMATS,
  });

  const handleRemove = () => {
    helpers.setValue([]);
  };

  return (
    <Box sx={{ mb: 2 }}>
      {label && (
        <Typography
          sx={{ color: meta.touched && meta.error ? "red" : theme.colors.dark }}
          variant="body1"
          mb={1}
          fontWeight={500}
        >
          {label}
        </Typography>
      )}

      <Paper
        variant="outlined"
        {...getRootProps()}
        sx={{
          p: 2,
          textAlign: "center",
          border: `2px dashed ${
            meta.touched && meta.error ? "red" : "#90caf9"
          }`,
          bgcolor: isDragActive ? "#e3f2fd" : "transparent",
          cursor: "pointer",
          transition: "all 0.3s",
        }}
      >
        <input {...getInputProps()} />
        <UploadFileIcon
          fontSize="large"
          color={`${meta.touched && meta.error ? "error" : "primary"}`}
        />
        <Typography variant="body2" mt={1}>
          {isDragActive
            ? "Drop the file here..."
            : "Drag and drop a file or click to select (PDF, DOC, PNG, etc.)"}
        </Typography>
      </Paper>

      {field.value?.length > 0 && (
        <List dense>
          {field.value.map((file: File, index: number) => (
            <ListItem
              key={index}
              secondaryAction={
                <IconButton edge="end" onClick={handleRemove}>
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText primary={file.name} />
            </ListItem>
          ))}
        </List>
      )}

      {meta.touched && meta.error && (
        <FormHelperText error>{meta.error}</FormHelperText>
      )}
    </Box>
  );
};

export default FileUploadField;
