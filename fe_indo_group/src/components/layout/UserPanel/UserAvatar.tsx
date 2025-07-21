import React, { useState, useContext } from "react";
import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../context/UserContext";

const AdminAvatar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const { user, clearUser } = useUser();

  if (!user) return null;

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    clearUser(); // clear auth context/token
    navigate("/");
    handleMenuClose();
  };

  return (
    <Box>
      <div className="flex items-center justify-start">
        <IconButton onClick={handleMenuOpen} size="small">
          <Avatar sx={{ bgcolor: "#1976d2" }}>
            {user?.name?.[0]?.toUpperCase() || "A"}
          </Avatar>
        </IconButton>

        <Box
          className="hidden md:flex flex-col items-start justify-start"
          px={1}
          py={1}
        >
          <Typography className="hidden md:block" variant="subtitle1">
            {user.name || "Admin"}
          </Typography>
          <Typography
            className="hidden md:block"
            variant="caption"
            color="text.secondary"
          >
            {user.email}
          </Typography>
        </Box>
      </div>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        PaperProps={{
          sx: {
            mt: 1.5,
            minWidth: 200,
          },
        }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
      >
        <Box className="md:hidden " px={2} py={1}>
          <Typography variant="subtitle1">{user.name || "Admin"}</Typography>
          <Typography variant="caption" color="text.secondary">
            {user.email}
          </Typography>
        </Box>
        <Divider />
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </Box>
  );
};

export default AdminAvatar;
