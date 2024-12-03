/** @format */

import React, { ReactNode } from "react";
import { Button, CircularProgress, ButtonProps } from "@mui/material";
import { theme } from "../../../constants/theme";

interface SecondaryButtonProps extends ButtonProps {
  children?: ReactNode;
  startIcon?: ReactNode;
  loaderColor?:
    | "inherit"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
  sx?: object;
  isLoading?: boolean;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  startIcon,
  color = "inherit", // Aligns with Material-UI's expected values
  variant = "outlined",
  loaderColor,
  sx,
  isLoading,
  ...otherProps
}) => {
  return (
    <Button
      className='text-[14px] !capitalize   md:text-[1rem]'
      sx={{
        background: theme.colors.gradient,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        display: "flex",
        alignItems: "center",
        border: "none",
        position: "relative",
        textDecoration: "capitalize",
        "&:hover": {
          textDecoration: "underline",
          // boxShadow: "2px 2px 5px #000000",
          // color: "green",
        },
        ...sx,
      }}
      color={color} // Material-UI's color prop
      variant={variant}
      {...otherProps}
    >
      {isLoading && (
        <CircularProgress
          color={loaderColor || "inherit"}
          size={20}
          className='me-2'
        />
      )}
      {children} {startIcon}
    </Button>
  );
};

export default SecondaryButton;
