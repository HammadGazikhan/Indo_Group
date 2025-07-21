import React, { useRef, useState } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useParams } from "react-router-dom";
import { useGetQuery, usePostMutation } from "../../../../hooks/useCrud";
import toast from "react-hot-toast";
import DocumentPreviewCard from "../../../../components/layout/DocumentsPreview";
import ConfirmDialog from "../../../../components/layout/ConformationDialog/index ";
import { Cancel, CheckCircle, UploadFile } from "@mui/icons-material";
import EmployeeDetailsCard from "../../../../components/layout/UserPanel/EmployeeDetails";

// ... rest of your imports

const EmployeeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [joiningLetter, setJoiningLetter] = useState<File | null>(null);

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [actionType, setActionType] = useState<"approved" | "rejected" | null>(
    null
  );
  const handleDialogConfirm = () => {
    if (actionType) {
      handleStatusChange(actionType);
      setConfirmOpen(false);
    }
  };
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    data: employee,
    isLoading,
    isError,
  } = useGetQuery(["employee", id], `/admin/employees/${id}`, Boolean(id));

  const { mutate: updateStatus, isPending } = usePostMutation(
    `/admin/verify/${id}`,
    (res) => {
      toast.success(res.message || "Status updated successfully");
      navigate(-1);
    },
    (err) => {
      toast.error(err?.response?.data?.message || "Failed to update status");
    }
  );

  const handleStatusChange = (status: "approved" | "rejected") => {
    const formData = new FormData();
    formData.append("isApproved", status);

    if (status === "approved" && joiningLetter) {
      formData.append("joiningLetter", joiningLetter);
    }

    updateStatus(formData as any); // FormData as body
  };

  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError || !employee)
    return <Typography color="error">Failed to load employee data.</Typography>;

  const { documents } = employee;

  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      <div className="flex flex-wrap items-center justify-between">
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)}
          variant="outlined"
        >
          Back
        </Button>

        {/* ✅ Approve / Reject Buttons with Letter Upload */}
        <Stack direction="row" flexWrap="wrap" gap={2}>
          {/* Upload Button */}
          <Button
            variant="outlined"
            component="label"
            className="border-dashed border-2 border-primary hover:bg-primary/10 text-primary font-semibold px-5 py-2 rounded-lg transition-all"
            startIcon={<UploadFile />}
          >
            {joiningLetter ? "Letter Attached" : "Upload Joining Letter"}
            <input
              hidden
              type="file"
              accept=".pdf,.doc,.docx"
              ref={fileInputRef}
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setJoiningLetter(file);
                }
              }}
            />
          </Button>

          {/* Approve Button */}
          <Button
            variant="contained"
            onClick={() => {
              setActionType("approved");
              setConfirmOpen(true);
            }}
            disabled={isPending || !joiningLetter}
            startIcon={<CheckCircle />}
            className="bg-green-600 hover:bg-green-700 text-white font-bold px-5 py-2 rounded-lg shadow-md transition-all"
          >
            {isPending ? "Approving..." : "Approve"}
          </Button>

          {/* Reject Button */}
          <Button
            variant="contained"
            onClick={() => {
              setActionType("rejected");
              setConfirmOpen(true);
            }}
            disabled={isPending}
            startIcon={<Cancel />}
            className="!bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-2 rounded-lg shadow-md transition-all"
          >
            Reject
          </Button>
        </Stack>
      </div>

      <EmployeeDetailsCard employee={employee} />

      <DocumentPreviewCard documents={documents} />

      <ConfirmDialog
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        onConfirm={handleDialogConfirm}
        loading={isPending}
        title={`Confirm ${
          actionType === "approved" ? "Approval" : "Rejection"
        }`}
        message={`Are you sure you want to ${
          actionType === "approved" ? "approve" : "reject"
        } this employee?`}
        confirmText={actionType === "approved" ? "Approve" : "Reject"}
      />
    </Box>
  );
};

export default EmployeeDetail;
