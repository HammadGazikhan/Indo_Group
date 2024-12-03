/** @format */

import React from "react";
import { Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { theme } from "../../constants/theme";

const PageNotFound: React.FC = () => {
  const defaulttheme = useTheme();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: "100vh",
        backgroundColor: defaulttheme.palette.background.default,
        color: defaulttheme.palette.text.primary,
      }}
    >
      {/* Gradient-styled 404 Text */}
      <Typography
        variant='h1'
        style={{
          background: theme.colors.gradient,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: theme.typography.fontWeight.bold,
          fontFamily: theme.typography.fontFamily,
          marginBottom: "20px",
        }}
      >
        404
      </Typography>

      {/* Subtitle */}
      <Typography
        variant='h5'
        style={{
          fontWeight: theme.typography.fontWeight.medium,
          fontFamily: theme.typography.fontFamily,
          marginBottom: "30px",
        }}
      >
        Oops! The page you're looking for doesn't exist.
      </Typography>

      {/* Home Button */}
      <Link to='/' style={{ textDecoration: "none" }}>
        <Button
          variant='contained'
          style={{
            background: theme.colors.gradient,
            color: defaulttheme.palette.primary.contrastText,
            fontWeight: theme.typography.fontWeight.medium,
            padding: "10px 20px",
          }}
        >
          Go Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default PageNotFound;
