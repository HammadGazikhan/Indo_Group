import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Breadcrumbs,
  Link as MUILink,
  useTheme,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useLocation, Link } from "react-router-dom";
import AdminAvatar from "./UserAvatar";

interface TopbarProps {
  onToggle: () => void;
}

// Format label to look nice
const formatLabel = (segment: string) =>
  segment.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

// Check if segment is an ID (UUID or number)
const isId = (segment: string) =>
  /^[0-9a-f]{24}$/i.test(segment) || // MongoDB ObjectId
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    segment
  ) || // UUID
  /^\d+$/.test(segment); // Numeric ID

const Topbar: React.FC<TopbarProps> = ({ onToggle }) => {
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter((x) => x);
  const validPathnames = pathnames.filter((segment) => !isId(segment));
  const pageTitle = formatLabel(validPathnames.at(-1) || "Dashboard");

  return (
    <AppBar
      position="sticky"
      elevation={1}
      sx={{
        bgcolor: "#fff",
        padding: "5px 0",
        color: "#333",
        zIndex: 10,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: { xs: 2, sm: 4 },
        }}
      >
        {/* Left Side: Menu + Breadcrumbs */}
        <Box display="flex" alignItems="center" gap={2}>
          <IconButton edge="start" color="inherit" onClick={onToggle}>
            <Menu />
          </IconButton>

          <Box>
            <Typography variant="h6" fontWeight={600}>
              {pageTitle}
            </Typography>
            <Breadcrumbs separator="›" sx={{ fontSize: 12 }}>
              <MUILink
                component={Link}
                to="/"
                underline="hover"
                color="inherit"
              >
                Home
              </MUILink>
              {validPathnames.map((segment, index) => {
                const to = "/" + validPathnames.slice(0, index + 1).join("/");
                const isLast = index === validPathnames.length - 1;
                return isLast ? (
                  <Typography key={to} color="primary" sx={{ fontSize: 13 }}>
                    {formatLabel(segment)}
                  </Typography>
                ) : (
                  <MUILink
                    key={to}
                    component={Link}
                    to={""}
                    underline="hover"
                    color="inherit"
                    sx={{ fontSize: 13 }}
                  >
                    {formatLabel(segment)}
                  </MUILink>
                );
              })}
            </Breadcrumbs>
          </Box>
        </Box>

        {/* Right Side: Avatar */}
        <Box display="flex" alignItems="center" gap={2}>
          <AdminAvatar />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
