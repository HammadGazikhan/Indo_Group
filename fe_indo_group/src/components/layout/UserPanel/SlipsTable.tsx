import {
  Card,
  CardContent,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { useState, useMemo } from "react";

interface SalarySlip {
  month: string;
  sentAt: string;
  filePath?: string;
}

interface SalarySlipsTableProps {
  slips: SalarySlip[];
}

const SalarySlipsTable: React.FC<SalarySlipsTableProps> = ({ slips }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSlips = useMemo(() => {
    return slips?.filter((slip) =>
      slip.month.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, slips]);

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Sent Salary Slips
        </Typography>

        {slips?.length > 0 ? (
          <>
            <TextField
              size="small"
              placeholder="Search by month (e.g. March)"
              fullWidth
              sx={{
                mb: 2,
                border: "none",
                " .MuiFormControl-root": {
                  border: "none !important",
                },
              }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />

            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Month</TableCell>
                  <TableCell>Sent At</TableCell>
                  <TableCell>Preview</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredSlips.map((slip, index) => (
                  <TableRow key={index}>
                    <TableCell>{slip.month}</TableCell>
                    <TableCell>
                      {new Date(slip.sentAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      {slip.filePath ? (
                        <Button
                          variant="outlined"
                          size="small"
                          target="_blank"
                          href={`${process.env.REACT_APP_IMG_API_URL}${slip.filePath}`}
                        >
                          View
                        </Button>
                      ) : (
                        "N/A"
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </>
        ) : (
          <Typography color="text.secondary">
            No salary slips sent yet.
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default SalarySlipsTable;
