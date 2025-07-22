// pages/AdminPanel/AdminDashboard.tsx

import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  CircularProgress,
} from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import CancelIcon from "@mui/icons-material/Cancel";
import { useGetQuery } from "../../../../hooks/useCrud";

const StatsCard = () => {
  const {
    data: stats,
    isLoading,
    isError,
  } = useGetQuery(["dashboard"], "/admin/dashboard-stats");

  const dashboardItems = [
    // {
    //   title: "Total Registered Employees",
    //   icon: <GroupIcon fontSize="large" color="primary" />,
    //   value: stats?.totalEmployees ?? 0,
    //   bg: "#e3f2fd",
    //   textColor: "#0d47a1",
    // },
    {
      title: "Onboarded Employees",
      icon: <CheckCircleIcon fontSize="large" color="success" />,
      value: stats?.approvedEmployees ?? 0,
      bg: "#e8f5e9",
      textColor: "#2e7d32",
    },
    {
      title: "Pending Applications",
      icon: <HourglassEmptyIcon fontSize="large" color="warning" />,
      value: stats?.pendingEmployees ?? 0,
      bg: "#fff8e1",
      textColor: "#f9a825",
    },
    {
      title: "Rejected Applications",
      icon: <CancelIcon fontSize="large" color="error" />,
      value: stats?.rejectedEmployees ?? 0,
      bg: "#ffebee",
      textColor: "#c62828",
    },
    {
      title: "Terminated Employees",
      icon: <CancelIcon fontSize="large" color="error" />,
      value: stats?.terminatedEmployees ?? 0,
      bg: "#fbe9e7",
      textColor: "#d84315",
    },
  ];

  return (
    <Box>
      {isLoading ? (
        <Box display="flex" justifyContent="center" mt={6}>
          <CircularProgress />
        </Box>
      ) : isError ? (
        <Typography color="error" textAlign="center" mt={4}>
          Failed to load dashboard data.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {dashboardItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card
                sx={{
                  backgroundColor: item.bg,
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: 6,
                    transform: "scale(1.02)",
                  },
                }}
              >
                <CardContent>
                  <Box display="flex" alignItems="center" gap={2}>
                    {item.icon}
                    <Box>
                      <Typography
                        variant="subtitle2"
                        sx={{ color: item.textColor }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        sx={{ color: item.textColor }}
                      >
                        {item.value}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default StatsCard;
