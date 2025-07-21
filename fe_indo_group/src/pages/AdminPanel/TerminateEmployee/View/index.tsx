import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  Stack,
} from "@mui/material";
import { useGetQuery, usePostMutation } from "../../../../hooks/useCrud";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import toast from "react-hot-toast";
import DocumentPreviewCard from "../../../../components/layout/DocumentsPreview";
import ConfirmDialog from "../../../../components/layout/ConformationDialog/index ";
import EmployeeDetailsCard from "../../../../components/layout/UserPanel/EmployeeDetails";
import SalarySlipsTable from "../../../../components/layout/UserPanel/SlipsTable";

const TerminatedEmployeeView = () => {
  const { id } = useParams();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [rejoiningLetter, setRejoiningLetter] = useState<File | null>(null);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const navigate = useNavigate();

  const { data: employee, isLoading } = useGetQuery<any>(
    ["employee", id],
    `/admin/employees/${id}`,
    !!id
  );

  const { mutate: rejoinEmployee, isPending: rejoining } = usePostMutation(
    `/admin/rejoin/${id}`,
    (res) => {
      toast.success(res.message);
      navigate(-1);
    },
    (err) => {
      toast.error(err?.response?.data?.message || "Failed to rejoin employee");
    }
  );

  const triggerConfirm = () => {
    if (!rejoiningLetter) {
      toast.error("Attach rejoining letter");
      return;
    }
    setConfirmOpen(true);
  };

  const handleConfirm = () => {
    setConfirmOpen(false);
    const formData = new FormData();
    formData.append("rejoiningLetter", rejoiningLetter as File);
    rejoinEmployee(formData);
  };

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" mt={5}>
        <CircularProgress />
      </Box>
    );
  }

  if (!employee) return <Typography>No employee found</Typography>;

  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      <Stack
        direction="row"
        justifyContent="space-between"
        flexWrap={"wrap"}
        gap={2}
        alignItems="center"
      >
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)}
          variant="outlined"
        >
          Back
        </Button>

        <Box display="flex" justifyContent="center">
          {!employee.rejoinLetterSent && (
            <Stack direction="row" flexWrap={"wrap"} gap={2}>
              <Button variant="outlined" component="label">
                Upload Rejoin Letter
                <input
                  hidden
                  type="file"
                  accept=".pdf,.doc,.docx"
                  ref={fileInputRef}
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) setRejoiningLetter(file);
                  }}
                />
              </Button>
              <Button
                variant="contained"
                color="error"
                disabled={rejoining || !rejoiningLetter}
                onClick={triggerConfirm}
              >
                {rejoining ? (
                  <span>
                    <CircularProgress size={24} />
                    "Reappointing..."
                  </span>
                ) : (
                  "Reappoint & Send Joining Letter"
                )}
              </Button>
            </Stack>
          )}
        </Box>
      </Stack>

      <EmployeeDetailsCard employee={employee} />

      <DocumentPreviewCard documents={employee.documents} />
      <SalarySlipsTable slips={employee?.slips} />

      {/* Confirm Dialog */}
      <ConfirmDialog
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        onConfirm={handleConfirm}
        loading={rejoining}
        title="Confirm Rejoining"
        message="Are you sure you want to reappoint this employee and send the joining letter?"
        confirmText="Yes, Reappoint"
        cancelText="Cancel"
      />
    </Box>
  );
};

export default TerminatedEmployeeView;
