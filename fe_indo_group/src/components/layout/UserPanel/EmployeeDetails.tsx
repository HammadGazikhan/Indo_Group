import React from "react";
import { Card, CardContent, Typography, Grid, Chip, Box } from "@mui/material";
import {
  Email,
  Phone,
  CalendarToday,
  Work,
  CheckCircle,
  Cancel,
  Info,
  HourglassTop,
  Block,
} from "@mui/icons-material";

interface Props {
  employee: {
    full_name: string;
    email: string;
    phone: string;
    dob: string;
    work_experience: number;
    isApproved: string;
    joiningLetterSent: boolean;
    joiningLetterSentAt?: string;
    terminationLetterSent: boolean;
    terminationLetterSentAt?: string;
    rejoinLetterSent: boolean;
    rejoinLetterSentAt?: string;
  };
}

const EmployeeDetailsCard: React.FC<Props> = ({ employee }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom fontWeight={600}>
          Personal Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center" gap={1}>
              <Info fontSize="small" />
              <Typography variant="body1">
                <strong>Name:</strong> {employee.full_name}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center" gap={1}>
              <Email fontSize="small" />
              <Typography variant="body1">
                <strong>Email:</strong> {employee.email}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center" gap={1}>
              <Phone fontSize="small" />
              <Typography variant="body1">
                <strong>Phone:</strong> {employee.phone}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center" gap={1}>
              <CalendarToday fontSize="small" />
              <Typography variant="body1">
                <strong>DOB:</strong> {employee.dob}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center" gap={1}>
              <Work fontSize="small" />
              <Typography variant="body1">
                <strong>Experience:</strong> {employee.work_experience} Years
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center" gap={1}>
              {employee.isApproved === "approved" ? (
                <CheckCircle color="success" fontSize="small" />
              ) : employee.isApproved === "pending" ? (
                <HourglassTop color="warning" fontSize="small" />
              ) : employee.isApproved === "rejected" ? (
                <Cancel color="error" fontSize="small" />
              ) : employee.isApproved === "terminated" ? (
                <Block color="error" fontSize="small" />
              ) : null}

              <Typography variant="body1">
                <strong>Status:</strong>{" "}
                <Chip
                  className="!capitalize"
                  label={employee.isApproved}
                  color={
                    employee.isApproved === "approved"
                      ? "success"
                      : employee.isApproved === "pending"
                      ? "warning"
                      : "error"
                  }
                  size="small"
                />
              </Typography>
            </Box>
          </Grid>
          {employee.rejoinLetterSent
            ? employee.joiningLetterSent && (
                <Grid item xs={12}>
                  <Typography variant="body1" color="primary">
                    <strong>Rejoin Letter Sent:</strong>{" "}
                    {employee.rejoinLetterSentAt
                      ? new Date(employee.rejoinLetterSentAt).toLocaleString()
                      : "Yes"}
                  </Typography>
                </Grid>
              )
            : employee.joiningLetterSent && (
                <Grid item xs={12}>
                  <Typography variant="body1" color="primary">
                    <strong>Joining Letter Sent:</strong>{" "}
                    {employee.joiningLetterSentAt
                      ? new Date(employee.joiningLetterSentAt).toLocaleString()
                      : "Yes"}
                  </Typography>
                </Grid>
              )}

          {!employee.rejoinLetterSent && employee.terminationLetterSent && (
            <Grid item xs={12}>
              <Grid item xs={12}>
                <Typography variant="body1" color="error">
                  <strong>Termination Letter Sent:</strong>{" "}
                  {employee.terminationLetterSentAt
                    ? new Date(
                        employee.terminationLetterSentAt
                      ).toLocaleString()
                    : "Yes"}
                </Typography>
              </Grid>
            </Grid>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default EmployeeDetailsCard;
