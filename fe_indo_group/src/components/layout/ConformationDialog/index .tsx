// components/ui/ConfirmDialog.tsx
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
} from "@mui/material";

interface ConfirmDialogProps {
  open: boolean;
  title?: string;
  message: React.ReactNode;
  onClose: () => void;
  onConfirm: () => void;
  confirmText?: string;
  cancelText?: string;
  loading?: boolean;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  open,
  title = "Are you sure?",
  message,
  onClose,
  onConfirm,
  confirmText = "Yes",
  cancelText = "Cancel",
  loading = false,
}) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle className="text-lg font-semibold">{title}</DialogTitle>
      <DialogContent>
        <Typography className="text-gray-700">{message}</Typography>
      </DialogContent>
      <DialogActions className="flex justify-end gap-2 px-4 pb-4">
        <Button onClick={onClose} disabled={loading}>
          {cancelText}
        </Button>
        <Button
          onClick={onConfirm}
          variant="contained"
          color="primary"
          disabled={loading}
        >
          {loading ? "Loading..." : confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
