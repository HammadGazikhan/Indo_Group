// components/DashboardPieChart.tsx

import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, Typography } from "@mui/material";
import { useGetQuery } from "../../../../hooks/useCrud";

const COLORS = ["#0d47a1", "#2e7d32", "#f9a825", "#c62828", "#d84315"];

interface PieData {
  name: string;
  value: number;
}

const DashboardPieChart = () => {
  const {
    data: stats,
    isLoading,
    isError,
  } = useGetQuery(["dashboard"], "/admin/dashboard-stats");
  const pieChartData = [
    { name: "Total", value: stats?.totalEmployees ?? 0 },
    { name: "Onboarded", value: stats?.approvedEmployees ?? 0 },
    { name: "Pending", value: stats?.pendingEmployees ?? 0 },
    { name: "Rejected", value: stats?.rejectedEmployees ?? 0 },
    { name: "Terminated", value: stats?.terminatedEmployees ?? 0 },
  ];
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Employee Status Distribution
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieChartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {pieChartData.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default DashboardPieChart;
