import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  ReferenceLine,
} from "recharts";
import {  Card, CardContent, Typography, useTheme } from "@mui/material";
import { useGetQuery } from "../../../../hooks/useCrud";

const EmployeeGrowthChart = () => {
  const { data = [], isLoading } = useGetQuery(
    ["monthly-registrations"],
    "/admin/monthly-registrations"
  );

  const theme = useTheme();

  if (isLoading) return <Typography>Loading chart...</Typography>;

  // Format month to short label
  const formatMonth = (month: string) => {
    try {
      const date = new Date(`${month}-01`);
      return date.toLocaleString("default", { month: "short" });
    } catch {
      return month;
    }
  };

  // Calculate average registrations
  const total = data.reduce(
    (acc: number, item: any) => acc + item.registrations,
    0
  );
  const average = data.length ? total / data.length : 0;

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

        <ResponsiveContainer width="100%" height={320}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis
              dataKey="month"
              tickFormatter={formatMonth}
              tick={{ fontSize: 12, fill: "#555" }}
            />
            <YAxis
              allowDecimals={false}
              tick={{ fontSize: 12, fill: "#555" }}
            />
            <Tooltip
              formatter={(value: number) => [`${value}`, "Registrations"]}
              labelFormatter={(label: string) => `Month: ${formatMonth(label)}`}
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #ccc",
              }}
            />

            {/* Average Line */}
            <ReferenceLine
              y={Math.round(average)}
              label={{
                position: "top",
                value: `Avg: ${Math.round(average)}`,
                fill: "#888",
                fontSize: 12,
              }}
              stroke="#8884d8"
              strokeDasharray="3 3"
            />

            <Bar
              dataKey="registrations"
              fill={theme.palette.primary.main}
              radius={[4, 4, 0, 0]}
              maxBarSize={40}
            >
              <LabelList
                dataKey="registrations"
                position="top"
                fontSize={12}
                fill="#333"
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default EmployeeGrowthChart;
