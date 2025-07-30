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
import toast from "react-hot-toast";
import ConfirmDialog from "../../../components/layout/ConformationDialog/index ";

const TerminateEmployee = () => {
  const navigate = useNavigate();
  const {
    data: employees = [],
    isLoading,
    isError,
  } = useGetQuery(["terminated-employees"], "/admin/terminated-employees");

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);

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

  const handleView = (row: any) => {
    navigate(`/admin/terminated-employees/${row._id}`);
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
              src={`${process.env.REACT_APP_API_URL}/${row.documents?.[key]}`}
              variant="rounded"
              alt={key}
              sx={{ width: 32, height: 32 }}
            />
          ))}
        </Stack>
      ),
    },
  ];

  return (
    <Box>
      <CustomTable
        columns={columns}
        data={employees}
        actions={{
          onView: handleView,
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

export default TerminateEmployee;
