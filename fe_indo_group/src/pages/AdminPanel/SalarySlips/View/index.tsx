import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  TextField,
  Stack,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useGetQuery, usePostMutation } from "../../../../hooks/useCrud";
import { useState } from "react";
import toast from "react-hot-toast";
import SalarySlipsTable from "../../../../components/layout/UserPanel/SlipsTable";
import EmployeeDetailsCard from "../../../../components/layout/UserPanel/EmployeeDetails";
import SendSalarySlipForm from "../../../../components/layout/UserPanel/SendSalarySlip";

const SalaryPage = () => {
  const { id } = useParams(); // employeeId

  const { data: employee, isLoading } = useGetQuery(
    ["employee", id],
    `/admin/employees/${id}`,
    Boolean(id)
  );

  if (isLoading || !employee) return <Typography>Loading...</Typography>;

  const slips = employee?.salarySlips || [];

  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      <Typography sx={{ marginBottom: 0 }} variant="h4" gutterBottom>
        Salary Slips - {employee.full_name}
      </Typography>

      {/* Employee Basic Info */}
      <EmployeeDetailsCard employee={employee} />

      {/* Salary Slip Upload Section */}
      {/* <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Send New Salary Slip
          </Typography>
          <Stack direction="row" flexWrap={"wrap"} gap={2}>
            <TextField
              type="month"
              label="Month"
              InputLabelProps={{ shrink: true }}
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            />
            <Button variant="outlined" component="label">
              Upload Slip
              <input
                type="file"
                hidden
                accept="application/pdf,image/*"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
              />
            </Button>
            <Button
              variant="contained"
              disabled={isPending}
              onClick={handleSubmit}
            >
              Send
            </Button>
          </Stack>
        </CardContent>
      </Card> */}
      <SendSalarySlipForm id={id || ""} />

      {/* Salary Slip History Table */}
      <SalarySlipsTable slips={slips} />
    </Box>
  );
};

export default SalaryPage;
