import React, { useState } from "react";
import {
  TextField,
  Button,
  Stack,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import toast from "react-hot-toast";
import ConfirmDialog from "../ConformationDialog/index ";

interface Props {
  onSubmit: (formData: FormData) => void;
  loading: boolean;
}

const SendSalarySlipForm: React.FC<Props> = ({ onSubmit, loading }) => {
  const [month, setMonth] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const handleUploadClick = () => {
    if (!month || !file) {
      toast.error("Please select file and month");
      return;
    }
    setConfirmOpen(true);
  };

  const handleConfirm = () => {
    const formData = new FormData();
    formData.append("salarySlip", file as File);
    formData.append("month", month);
    onSubmit(formData);
    setConfirmOpen(false);
  };

  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Send New Salary Slip
          </Typography>
          <Stack direction="row" flexWrap="wrap" gap={2}>
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
              disabled={loading || !file || !month}
              onClick={handleUploadClick}
            >
              {loading ? "Sending..." : "Send"}
            </Button>
          </Stack>
        </CardContent>
      </Card>

      {/* Confirm Dialog */}
      <ConfirmDialog
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        onConfirm={handleConfirm}
        loading={loading}
        title="Confirm Send Salary Slip"
        confirmText="Send"
        message={
          <>
            <Typography>
              <strong>Month:</strong>{" "}
              {month
                ? new Date(`${month}-01`).toLocaleDateString("default", {
                    year: "numeric",
                    month: "long",
                  })
                : "-"}
            </Typography>
            {file && (
              <Typography mt={1}>
                <strong>File:</strong> {file.name}
              </Typography>
            )}
          </>
        }
      />
    </>
  );
};

export default SendSalarySlipForm;
