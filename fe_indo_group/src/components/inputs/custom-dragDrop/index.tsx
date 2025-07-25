import React, { useRef, useState, DragEvent, useEffect } from "react";
import { useField, useFormikContext } from "formik";
import {
  Typography,
  Paper,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  FormHelperText,
} from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import DeleteIcon from "@mui/icons-material/Delete";

interface CustomFileUploadProps {
  name: string;
  label?: string;
  accept?: string;
  multiple?: boolean;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
}

const CustomFileUpload: React.FC<CustomFileUploadProps> = ({
  name,
  label = "Upload File",
  accept = "*",
  multiple = false,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [previews, setPreviews] = useState<string[]>([]);

  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();
  const currentFiles = field.value as FileList | File | null;

  useEffect(() => {
    if (!currentFiles) {
      setPreviews([]);
      return;
    }

    const fileArray = multiple
      ? (Array.from(currentFiles as FileList) as File[])
      : [currentFiles as File];

    const urls = fileArray.map((file) =>
      file.type.startsWith("image/") ? URL.createObjectURL(file) : file.name
    );

    setPreviews(urls);

    return () => {
      urls.forEach((url) => {
        if (url.startsWith("blob:")) URL.revokeObjectURL(url);
      });
    };
  }, [currentFiles]);

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    setFieldValue(name, multiple ? files : files[0]);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleClick = () => inputRef.current?.click();

  return (
    <Box className="w-full">
      {/* {label && (
        <Typography
          sx={{
            fontSize: "0.875rem",
            color: meta.touched && meta.error ? "red" : "",
          }}
          variant="subtitle2"
          mb={1}
          fontWeight={500}
        >
          {label}
        </Typography>
      )} */}

      <Paper
        elevation={0}
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        sx={{
          position: "relative",
          border: `2px dashed ${
            dragOver
              ? "#2563eb" // blue-600
              : meta.error && meta.touched
              ? "#dc2626" // red-600
              : "#d1d5db" // gray-300
          }`,
          padding: "1.5rem",
          textAlign: "center",
          backgroundColor: dragOver ? "#eff6ff" : "#f9fafb", // blue-50 / gray-50
          cursor: "pointer",
          borderRadius: "0.75rem",
          transition: "all 0.2s ease-in-out",
        }}
      >
        {label && (
          <Typography
            sx={{
              position: "absolute",
              backgroundColor: "#fff",
              padding: "0 2px",
              top: "-0.7rem",
              left: 12,
              fontSize: "0.8rem",
              fontWeight: 700,
              color: meta.touched && meta.error ? "red" : "",
            }}
            variant="subtitle2"
            mb={1}
            fontWeight={500}
          >
            {label}
          </Typography>
        )}
        <UploadFileIcon className="text-gray-400" fontSize="large" />
        <Typography variant="body2" mt={1} className="text-sm text-gray-500">
          Drag & Drop or{" "}
          <span className="text-blue-600 font-medium">Click</span> to Upload
        </Typography>
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          hidden
          onChange={(e) => handleFiles(e.currentTarget.files)}
        />
      </Paper>

      {previews.length > 0 && (
        <List dense className="!mt-0">
          {previews.map((preview, index) => (
            <ListItem
              key={index}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => {
                    if (multiple) {
                      const newFiles = Array.from(
                        currentFiles as FileList
                      ).filter((_, i) => i !== index);
                      const dt = new DataTransfer();
                      newFiles.forEach((file) => dt.items.add(file));
                      setFieldValue(name, dt.files);
                    } else {
                      setFieldValue(name, null);
                    }
                  }}
                >
                  <DeleteIcon className="text-red-600" />
                </IconButton>
              }
            >
              <ListItemText
                primary={
                  preview.startsWith("blob:") ? `Image ${index + 1}` : preview
                }
                primaryTypographyProps={{
                  className: "text-sm text-gray-700 font-medium truncate",
                }}
              />
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

export default CustomFileUpload;
