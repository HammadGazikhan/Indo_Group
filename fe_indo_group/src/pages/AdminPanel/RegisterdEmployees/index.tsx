import toast from "react-hot-toast";
import CustomTable from "../../../components/layout/UserPanel/Table";
import { useDeleteMutation, useGetQuery } from "../../../hooks/useCrud";
import {
  Box,
  CircularProgress,
  Typography,
  Avatar,
  Stack,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ConfirmDialog from "../../../components/layout/ConformationDialog/index ";

const AdminEmployeeList = () => {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const navigate = useNavigate();
  const {
    data: employees = [],
    isLoading,
    isError,
  } = useGetQuery(["employees"], "/admin/pending-employees");

  const handleView = (row: any) => {
    navigate(`/admin/employee/${row._id}`);
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
      deleteTerminatedEmployee(`/admin/employee/${selectedRow._id}`);
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
    {
      id: "full_name",
      label: "Name",
      render: (row: any) => (
        <Link
          to={`/admin/employee/${row._id}`}
          className="flex items-center gap-2 group"
        >
          {row.seen === false && (
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-md group-hover:animate-ping " />
          )}
          <p className="text-sm font-medium text-gray-800  group-hover:cursor-pointer group-hover:underline group-hover:text-blue-600">
            {row.full_name}
          </p>
        </Link>
      ),
    },
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
        message={`Are you sure you want to permanently delete this Registered employee? This action cannot be undone.`}
        confirmText="Delete"
      />
    </Box>
  );
};

export default AdminEmployeeList;
