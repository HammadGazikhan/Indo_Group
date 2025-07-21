/** @format */

// src/theme/theme.ts
// const tablet = useMediaQuery("(max-width : 1365px)");
export const theme = {
  colors: {
    heading: "#EEE8A9",
    secondaryHeading: "#F5F5F5",
    primary: "#4E4E4D",
    primaryLight: "#737373",
    primaryDark: "#B91C1C",
    secondary: "#FFFFFF", // Blue
    secondaryLigth: "#FAFAFA",
    dark: "#262626",
    lightBlue: "#0E7490",
    paragraph: "#000000",
    background: "#E6F4F1", // Light gray
    secondaryBackground: "#0E7490",
    backgroundFooter: "#171717",
    textPrimary: "#1F2937", // Dark gray
    fieldBackground: "#00000005",
    textSecondary: "#525252", // Medium gray
    gradient: "linear-gradient(90deg, #0E7490 0%, #139ABF 100%)",
    border: "#0E7490", // Light gray
    success: "#10B981", // Green
    warning: "#F59E0B", // Yellow
    error: "#DC2626", // Red
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    fontFamilyHeading: "'Playfair Display', 'serif'",
    fontSize: {
      small: "0.875rem", // 14px
      base: "1rem", // 16px
      large: "1.2rem", // 18px
      xLarge: "1.5rem", // 24px
      xxLarge: "3rem",
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      bold: 700,
      ExtraBold: 900,
    },
  },
  spacing: {
    xs: "0.5rem", // 8px
    sm: "1rem", // 16px
    md: "1.5rem", // 24px
    lg: "2rem", // 32px
    xl: "3rem", // 48px
  },
  breakpoints: {
    mobile: "640px",
    tablet: "768px",
    laptop: "1024px",
    desktop: "1280px",
  },
  borderRadius: {
    small: "4px",
    medium: "8px",
    large: "16px",
  },
  boxShadow: {
    sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.2)",
  },
};
