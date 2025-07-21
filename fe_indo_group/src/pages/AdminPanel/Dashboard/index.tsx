// pages/AdminPanel/AdminDashboard.tsx

import { Box, Grid } from "@mui/material";

import EmployeeGrowthChart from "../../../components/layout/UserPanel/dashboard/monthlyChart";
import StatsCard from "../../../components/layout/UserPanel/dashboard/statsCard";
import DashboardPieChart from "../../../components/layout/UserPanel/dashboard/statsPieChart";

const Dashboard = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      <StatsCard />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <EmployeeGrowthChart />
        <DashboardPieChart />
      </div>
    </Box>
  );
};

export default Dashboard;
