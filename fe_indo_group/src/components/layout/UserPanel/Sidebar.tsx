import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useNavigate, useLocation, Link } from "react-router-dom";
import {
  Group,
  CheckCircle,
  Cancel,
  Article,
  Dashboard,
  Block,
} from "@mui/icons-material";
import image from "../../../constants/image";
import CloseIcon from "@mui/icons-material/Close";
interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const navItems = [
  {
    label: "Admin Dashboard",
    path: "/admin/dashboard",
    icon: <Dashboard />,
  },
  {
    label: "Employee Applications",
    path: "/admin/registered-employees",
    icon: <Group />,
  },
  {
    label: "Onboarded Candidates",
    path: "/admin/approved-employees",
    icon: <CheckCircle />,
  },
  {
    label: "Rejected Applications",
    path: "/admin/rejected-employees",
    icon: <Cancel />,
  },
  {
    label: "Salary Documents",
    path: "/admin/salary-slips",
    icon: <Article />,
  },
  {
    label: "Terminated Staff",
    path: "/admin/terminated-employees",
    icon: <Block />,
  },
];
const Sidebar: React.FC<SidebarProps> = ({ collapsed, onToggle }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // true on xs/sm

  const navigate = useNavigate();
  const location = useLocation();

  const drawerWidth = collapsed ? 70 : 240;

  return (
    <Drawer
      variant={isSmallScreen ? "temporary" : "permanent"}
      open={!collapsed || !isSmallScreen} // open only if not collapsed or large screen
      onClose={() => {
        // Add logic here if you want to toggle collapse externally
      }}
      ModalProps={{
        keepMounted: true, // improves mobile performance
      }}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          transition: "width 0.3s ease",
        },
      }}
    >
      <Box p={1} position={"relative"}>
        <Link to="/">
          <img
            src={image.Logo}
            alt="Logo"
            style={{ width: "100%", height: "56px" }}
          />
        </Link>
        {isSmallScreen && (
          <IconButton
            className="!absolute  !top-5 !right-2"
            edge="start"
            color="inherit"
            onClick={onToggle}
          >
            <CloseIcon />
          </IconButton>
        )}
      </Box>
      <List sx={{ pt: 0, pb: 0 }}>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <Tooltip
              title={collapsed ? item.label : ""}
              placement="right"
              key={item.path}
            >
              <ListItemButton
                onClick={() => navigate(item.path)}
                selected={isActive}
                sx={{
                  "& .MuiListItemIcon-root": {
                    minWidth: "40px !important",
                    height: "56px !important",
                    alignItems: "center",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: "40px !important",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                {!collapsed && <ListItemText primary={item.label} />}
              </ListItemButton>
            </Tooltip>
          );
        })}
      </List>
    </Drawer>
  );
};

export default Sidebar;
