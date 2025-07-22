import React, { useState } from "react";
import { useField } from "formik";
import {
  TextField,
  InputAdornment,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

interface InputFieldProps {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  type = "text",
  placeholder,
  icon,
  fullWidth = true,
}) => {
  const [field, meta] = useField(name);
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const hasError = meta.touched && Boolean(meta.error);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleTogglePassword = () => setShowPassword((prev) => !prev);

  return (
    <TextField
      {...field}
      type={isPassword ? (showPassword ? "text" : "password") : type}
      label={label}
      placeholder={placeholder}
      fullWidth={fullWidth}
      variant="outlined"
      margin="normal"
      error={hasError}
      helperText={hasError && meta.error}
      InputLabelProps={{
        shrink: true,
        sx: {
          "&.MuiInputLabel-root": {
            fontSize: "1rem", // Tailwind text-lg ~18px
            fontWeight: 500,
            color: hasError ? "#dc2626" : "#000000",
          },
        },
      }}
      sx={{
        mt: 0,
        mb: 0,
        "& .MuiInputBase-root": {
          borderRadius: "10px",
          fontSize: isSmallScreen ? "14px" : "16px",
        },
        "& .MuiFormHelperText-root": {
          fontSize: isSmallScreen ? "11px" : "13px",
        },
      }}
      InputProps={{
        startAdornment: icon && (
          <InputAdornment position="start">
            <span
              style={{
                fontSize: isSmallScreen ? 18 : 22,
                color: hasError ? "#dc2626" : "#6b7280", // red-600 if error, gray-500 otherwise
                display: "flex",
                alignItems: "center",
              }}
            >
              {icon}
            </span>
          </InputAdornment>
        ),
        endAdornment: isPassword && (
          <InputAdornment position="end">
            <IconButton onClick={handleTogglePassword} edge="end">
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default InputField;
