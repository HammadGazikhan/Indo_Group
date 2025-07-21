import React, { useRef, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Stack,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { UploadFile } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import { useGetQuery, usePostMutation } from "../../../../hooks/useCrud";
import toast from "react-hot-toast";
import DocumentPreviewCard from "../../../../components/layout/DocumentsPreview";
import ConfirmDialog from "../../../../components/layout/ConformationDialog/index ";
import SalarySlipsTable from "../../../../components/layout/UserPanel/SlipsTable";
import EmployeeDetailsCard from "../../../../components/layout/UserPanel/EmployeeDetails";

const ApprovedEmployeeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [terminationLetter, setTerminationLetter] = useState<File | null>(null);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const {
    data: employee,
    isLoading,
    isError,
  } = useGetQuery(["employee", id], `/admin/employees/${id}`, Boolean(id));

  const { mutate: terminateEmployee, isPending: terminating } = usePostMutation(
    `/admin/terminate/${id}`,
    (res) => {
      toast.success(res.message);
      navigate(-1);
    },
    (err) => {
      toast.error(
        err?.response?.data?.message || "Failed to terminate employee"
      );
    }
  );

  const openDialog = () => {
    if (!terminationLetter) {
      toast.error("Attach termination letter");
      return;
    }
    setConfirmOpen(true);
  };
  const slips = employee?.salarySlips || [];

  const handleDialogConfirm = () => {
    setConfirmOpen(false);
    if (!terminationLetter) return;
    const formData = new FormData();
    formData.append("terminationLetter", terminationLetter);
    terminateEmployee(formData);
  };

  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError || !employee)
    return <Typography color="error">Failed to load employee data.</Typography>;

  const { documents, terminationLetterSent } = employee;

  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      <Stack
        direction="row"
        flexWrap={"wrap"}
        justifyContent="space-between"
        alignItems="center"
        gap={2}
      >
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)}
          variant="outlined"
        >
          Back
        </Button>

        {!terminationLetterSent && (
          <Stack direction="row" flexWrap={"wrap"} gap={2}>
            <Button
              variant="outlined"
              component="label"
              className="border-dashed border-2 border-primary hover:bg-primary/10 text-primary font-semibold px-5 py-2 rounded-lg transition-all"
              startIcon={<UploadFile />}
            >
              Upload Termination Letter
              <input
                hidden
                type="file"
                accept=".pdf,.doc,.docx"
                ref={fileInputRef}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) setTerminationLetter(file);
                }}
              />
            </Button>
            <Button
              variant="contained"
              color="error"
              disabled={terminating || !terminationLetter}
              onClick={openDialog}
            >
              {terminating ? "Terminating..." : "Terminate Employee"}
            </Button>
          </Stack>
        )}
      </Stack>

      <EmployeeDetailsCard employee={employee} />

      <DocumentPreviewCard documents={documents} />

      <SalarySlipsTable slips={slips} />

      <ConfirmDialog
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        onConfirm={handleDialogConfirm}
        loading={terminating}
        title={`Confirm Termination`}
        message={`Are you sure you want to terminate this employee?`}
        confirmText={"Terminate"}
      />
    </Box>
  );
};

export default ApprovedEmployeeDetail;
