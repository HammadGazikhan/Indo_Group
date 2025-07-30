import React from "react";
import CustomTable from "../../../components/layout/UserPanel/Table";
import { useGetQuery } from "../../../hooks/useCrud";
import {
  Box,
  CircularProgress,
  Typography,
  Avatar,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const SalarySlips = () => {
  const navigate = useNavigate();
  const {
    data: employees = [],
    isLoading,
    isError,
  } = useGetQuery(["appproved-employees"], "/admin/approved-employees");

  const handleView = (row: any) => {
    navigate(`/admin/salary-slips/${row._id}`);
    console.log("Viewing employee:", row);
  };

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" mt={6}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box textAlign="center" mt={6}>
        <Typography color="error">Failed to fetch employee data.</Typography>
      </Box>
    );
  }

  // ✅ Define columns including document preview
  const columns = [
    { id: "full_name", label: "Name" },
    { id: "email", label: "Email" },
    { id: "phone", label: "Phone" },
    { id: "dob", label: "DOB" },
    { id: "work_experience", label: "Experience" },
    {
      id: "documents",
      label: "Documents",
      render: (row: any) => (
        <Stack direction="row" spacing={1}>
          {["aadhaar", "pan", "ssc", "hsc", "degree"].map((key) => (
            <Avatar
              key={key}
              src={`${process.env.REACT_APP_IMG_API_URL}${row.documents?.[key]}`} // Adjust your base URL
              // Adjust your base URL
              variant="rounded"
              alt={key}
              sx={{ width: 32, height: 32 }}
            />
          ))}
        </Stack>
      ),
    },
  ];

  // ✅ Map data and include custom render logic if needed
  const tableData = employees; // ✅ just pass raw data

  return (
    <Box>
      <CustomTable
        columns={columns}
        data={tableData}
        actions={{
          onView: handleView,
        }}
      />
    </Box>
  );
};

export default SalarySlips;
