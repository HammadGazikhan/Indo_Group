import React, { useState } from "react";
import CustomTable from "../../../components/layout/UserPanel/Table";
import { useDeleteMutation, useGetQuery } from "../../../hooks/useCrud";
import {
  Box,
  CircularProgress,
  Typography,
  Avatar,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ConfirmDialog from "../../../components/layout/ConformationDialog/index ";
import toast from "react-hot-toast";

const RejectedEmployeeList = () => {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);

  const navigate = useNavigate();
  const {
    data: employees = [],
    isLoading,
    isError,
  } = useGetQuery(["employees"], "/admin/rejected-employees");

  const handleView = (row: any) => {
    navigate(`/admin/rejected-employees/${row._id}`);
    console.log("Viewing employee:", row);
  };
  const { mutate: deleteTerminatedEmployee, isPending: isDeleting } =
    useDeleteMutation(
      (res: any) => {
        toast.success(res.message || "Employee deleted successfully");
        setConfirmOpen(false); // close dialog
      },
      (err: any) => {
        toast.error(
          err?.response?.data?.message || "Failed to delete employee"
        );
        setConfirmOpen(false);
      }
    );

  const handleDelete = (row: any) => {
    setSelectedRow(row);
    setConfirmOpen(true);
  };

  const handleConfirmDelete = () => {
    if (selectedRow?._id) {
      deleteTerminatedEmployee(`/admin/terminated/${selectedRow._id}`);
    }
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
          // onView: handleView,
          onDelete: handleDelete,
        }}
      />
      {/* ✅ Confirm Dialog */}
      <ConfirmDialog
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        onConfirm={handleConfirmDelete}
        loading={isDeleting}
        title={`Delete ${selectedRow?.full_name}?`}
        message={`Are you sure you want to permanently delete this terminated employee? This action cannot be undone.`}
        confirmText="Delete"
      />
    </Box>
  );
};

export default RejectedEmployeeList;
