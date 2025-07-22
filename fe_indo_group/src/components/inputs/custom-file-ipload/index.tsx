import React from "react";
import { useField, useFormikContext } from "formik";
import { Button, Typography, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
interface CustomFileUploadProps {
  name: string;
  label?: string;
  accept?: string;
}

const HiddenInput = styled("input")({
  display: "none",
});

const CustomFileButton: React.FC<CustomFileUploadProps> = ({
  name,
  label = "Upload File",
  accept = "application/pdf,image/*",
}) => {
  const [field, meta, helpers] = useField(name);
  const { setFieldValue } = useFormikContext();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    if (file) {
      setFieldValue(name, file);
    }
  };

  return (
    <Stack>
      <label htmlFor={name}>
        <HiddenInput
          id={name}
          name={name}
          type="file"
          accept={accept}
          onChange={handleFileChange}
        />
        <Button
          variant="outlined"
          sx={{
            width: "100%",
            height: "56px",
            borderRadius: "10px",
            color: meta.touched && meta.error ? "red" : "",
            borderColor: meta.touched && meta.error ? "red" : "",
          }}
          component="span"
        >
          {field.value instanceof File ? (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                maxWidth: "300px",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Selected file: <strong>{field.value.name}</strong>
            </Typography>
          ) : (
            label
          )}
          {field.value instanceof File && (
            <CloseIcon
              sx={{ ml: 1, color: "red" }}
              onClick={() => helpers.setValue(null)}
            />
          )}
        </Button>
      </label>
      {/* 
      {field.value instanceof File && (
        <Typography variant="body2" color="text.secondary">
          Selected file: <strong>{field.value.name}</strong>
        </Typography>
      )} */}

      {meta.touched && meta.error && (
        <Typography variant="caption" mt={1} color="error">
          {meta.error}
        </Typography>
      )}
    </Stack>
  );
};

export default CustomFileButton;
