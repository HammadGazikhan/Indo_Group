import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
} from "@mui/material";
import { Download, Visibility } from "@mui/icons-material";

interface DocumentPreviewCardProps {
  documents: Record<string, string>; // { docType: filePath }
}

const getFileExtension = (url: string): string => {
  const ext = url.split(".").pop();
  return ext ? ext.toLowerCase() : "";
};

const isImage = (ext: string) =>
  ["jpg", "jpeg", "png", "webp", "gif", "bmp"].includes(ext);

const DocumentPreviewCard: React.FC<DocumentPreviewCardProps> = ({
  documents,
}) => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>("");

  const handleDownload = (fileUrl: string, title: string) => {
    const ext = getFileExtension(fileUrl);
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = `${title}.${ext}`;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePreview = (fileUrl: string, title: string) => {
    const ext = getFileExtension(fileUrl);
    if (isImage(ext)) {
      setSelectedImage(fileUrl);
      setSelectedTitle(title);
      setOpen(true);
    } else {
      window.open(fileUrl, "_blank");
    }
  };

  if (!documents || Object.keys(documents).length === 0) return null;

  return (
    <div>
      <Typography
        sx={{ marginBottom: 1 }}
        variant="h6"
        gutterBottom
        className="mb-4 font-semibold"
      >
        Uploaded Documents
      </Typography>

      <Grid container spacing={2}>
        {Object.entries(documents).map(([docType, path]) => {
          const fileUrl = `${process.env.REACT_APP_IMG_API_URL}${path}`;
          const ext = getFileExtension(fileUrl);

          return (
            <Grid item xs={6} sm={4} md={3} lg={2} key={docType}>
              <Card className="shadow-md hover:shadow-lg transition-all duration-300 w-full">
                <CardContent className="flex flex-col items-center text-center gap-3 p-4">
                  <Typography
                    variant="subtitle2"
                    className="font-semibold uppercase truncate w-full"
                  >
                    {docType}
                  </Typography>

                  {isImage(ext) ? (
                    <Avatar
                      src={fileUrl}
                      variant="rounded"
                      alt={docType}
                      sx={{ width: 100, height: 100 }}
                      className="border border-gray-300"
                    />
                  ) : (
                    <div className="w-24 h-24 flex items-center justify-center border border-gray-300 rounded bg-gray-50 text-xs text-gray-700 font-medium">
                      {ext.toUpperCase() || "FILE"}
                    </div>
                  )}

                  <div className="flex gap-2">
                    <IconButton
                      size="small"
                      onClick={() => handlePreview(fileUrl, docType)}
                      title="Preview"
                      color="primary"
                    >
                      <Visibility fontSize="small" />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={() => handleDownload(fileUrl, docType)}
                      title="Download"
                      color="secondary"
                    >
                      <Download fontSize="small" />
                    </IconButton>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      {/* Image Preview Dialog */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle className="text-lg font-semibold">
          {selectedTitle}
        </DialogTitle>
        <DialogContent dividers>
          <img
            src={selectedImage ?? ""}
            alt={selectedTitle}
            className="w-full h-auto object-contain rounded"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Close</Button>
          <Button
            onClick={() =>
              selectedImage && handleDownload(selectedImage, selectedTitle)
            }
            variant="contained"
          >
            Download
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DocumentPreviewCard;
