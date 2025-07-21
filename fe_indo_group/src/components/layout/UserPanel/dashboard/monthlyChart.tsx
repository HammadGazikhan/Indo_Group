import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import { useGetQuery } from "../../../../hooks/useCrud";

const EmployeeGrowthChart = () => {
  const { data, isLoading } = useGetQuery(
    ["monthly-registrations"],
    "/admin/monthly-registrations"
  );

  const theme = useTheme();

  if (isLoading) return <Typography>Loading chart...</Typography>;

  const formatMonth = (month: string) => {
    try {
      const date = new Date(`${month}-01`); // expecting format: 2024-03
      return date.toLocaleString("default", { month: "short" }); // Jan, Feb, etc.
    } catch {
      return month;
    }
  };

  return (
    <Card sx={{ width: "100%" }}>
      <CardContent>
        <Typography
          variant="h6"
          mb={2}
          fontWeight={600}
          fontSize={{ xs: 16, sm: 20 }}
        >
          Monthly Registrations
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={data}
            margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis
              dataKey="month"
              tickFormatter={formatMonth}
              tick={{ fontSize: 12, fill: "#666" }}
            />
            <YAxis
              allowDecimals={false}
              tick={{ fontSize: 12, fill: "#666" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #ccc",
              }}
              formatter={(value: any, name: any) => [
                `${value}`,
                "Registrations",
              ]}
              labelFormatter={(label) =>
                `Month: ${formatMonth(label as string)}`
              }
            />
            <Line
              type="monotone"
              dataKey="registrations"
              stroke={theme.palette.primary.main}
              strokeWidth={3}
              dot={{ r: 4 }}
            >
              <LabelList dataKey="registrations" position="top" fontSize={10} />
            </Line>
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default EmployeeGrowthChart;
