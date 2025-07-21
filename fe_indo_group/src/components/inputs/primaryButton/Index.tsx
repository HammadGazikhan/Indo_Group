/** @format */

import { Button, CircularProgress, ButtonProps } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";
import { theme } from "../../../constants/theme";
import { useMediaQuery } from "@relume_io/relume-ui";

interface PrimaryButtonProps extends ButtonProps {
  isLoading?: boolean;
  sx?: SxProps<Theme>;
  children: React.ReactNode; // Make sure to define the 'children' prop here
}

const PrimaryButton = ({
  children,
  sx,
  isLoading,
  ...otherProps
}: PrimaryButtonProps) => {
  const md = useMediaQuery("(max-width:900px)");

  return (
    <Button
      variant="contained"
      color="warning"
      sx={{
        fontFamily: "roboto",
        background: theme.colors.gradient,
        color: theme.colors.secondary,
        fontWeight: theme.typography.fontWeight.medium,
        fontSize: md ? "18px" : "20px",

        textTransform: "none",
        borderRadius: "5px",
        boxShadow: "none",
        "&:hover": {
          boxShadow: "2px 4px 4px 2px #00000040",
          // background: "red",
        },
        ...sx,
      }}
      {...otherProps}
    >
      {isLoading && (
        <CircularProgress
          sx={{ color: "white" }}
          size={20}
          className="me-2 !text-white"
        />
      )}
      {children}
    </Button>
  );
};

export default PrimaryButton;
