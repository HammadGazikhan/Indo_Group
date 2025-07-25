import React, { useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Sidebar
        onToggle={() => setCollapsed(!collapsed)}
        collapsed={collapsed}
      />

      <Box sx={{ flexGrow: 1, height: "100%" }}>
        <Topbar onToggle={() => setCollapsed(!collapsed)} />
        <Box
          m={0}
          sx={{ bgcolor: "#f5f6fa", height: { lg: "calc(100vh - 80px)" } }}
          p={{ xs: 2, sm: 3, md: 4 }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default AdminLayout;
