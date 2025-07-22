import React, { useState } from "react";
import { Button, Typography, Card, CardContent } from "@mui/material";
import toast from "react-hot-toast";
import * as Yup from "yup";
import { Form, Formik, useFormikContext } from "formik";
import InputField from "../../inputs/custom-input";
import { usePostMutation } from "../../../hooks/useCrud";
import ConfirmDialog from "../ConformationDialog/index ";
import CustomFileButton from "../../inputs/custom-file-ipload";

// ✅ Yup validation schema
const validationSchema = Yup.object().shape({
  month: Yup.string().required("Month is required"),
  file: Yup.mixed()
    .required("Salary slip file is required")
    .test("fileType", "Only PDF or image files are allowed", (value) => {
      return (
        value &&
        value instanceof File &&
        ["application/pdf", "image/jpeg", "image/png"].includes(value.type)
      );
    }),
});

interface Props {
  id: string;
}

const SendSalarySlipForm: React.FC<Props> = ({ id }) => {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [confirmData, setConfirmData] = useState<{
    month: string;
    file: File | null;
  }>({
    month: "",
    file: null,
  });
  // const { resetForm } = useFormikContext();

  const { mutate, isPending: loading } = usePostMutation(
    `/admin/salary-slip/${id}`,
    (res) => {
      toast.success(res.message);
      // resetForm(); // ✅ Reset after success
    },
    (err) => {
      toast.error(err?.response?.data?.message || "Failed to send slip");
    }
  );

  const handleUploadClick = async (values: {
    month: string;
    file: File | null;
  }) => {
    try {
      await validationSchema.validate(values);
      setConfirmData({ month: values.month, file: values.file });
      setConfirmOpen(true);
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const handleConfirm = () => {
    if (!confirmData.file || !confirmData.month) return;

    const formData = new FormData();
    formData.append("salarySlip", confirmData.file);
    formData.append("month", confirmData.month);

    mutate(formData);
    setConfirmOpen(false);
  };

  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Send New Salary Slip
          </Typography>

          <Formik
            initialValues={{ month: "", file: null }}
            validationSchema={validationSchema}
            onSubmit={(values) => handleUploadClick(values)}
          >
            <Form className="grid mt-2 grid-cols-1 items-center gap-4 max-w-xs mx-auto">
              <InputField name="month" type="month" label="Month" />
              <CustomFileButton
                name="file"
                label="Upload Salary Slip"
                accept="application/pdf,image/*"
              />
              <Button
                variant="contained"
                className="h-[56px] !rounded-[10px]"
                disabled={loading}
                type="submit"
              >
                {loading ? "Sending..." : "Send"}
              </Button>
            </Form>
          </Formik>
        </CardContent>
      </Card>

      {/* ✅ Confirm Dialog */}
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
              {confirmData.month
                ? new Date(`${confirmData.month}-01`).toLocaleDateString(
                    "default",
                    { year: "numeric", month: "long" }
                  )
                : "-"}
            </Typography>
            {confirmData.file && (
              <Typography mt={1}>
                <strong>File:</strong> {confirmData.file.name}
              </Typography>
            )}
          </>
        }
      />
    </>
  );
};

export default SendSalarySlipForm;
