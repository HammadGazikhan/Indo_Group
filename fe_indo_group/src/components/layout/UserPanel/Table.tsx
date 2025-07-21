import React, { useMemo, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TablePagination,
} from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import { FiSearch, FiSettings } from "react-icons/fi";

type Column = {
  id: string;
  label: string;
  minWidth?: number;
  render?: (row: any) => React.ReactNode;
  sortable?: boolean;
};

type ActionProps = {
  onView: (row: any) => void;
  onDelete?: (row: any) => void;
};

type EmployeeTableProps = {
  columns: Column[];
  data: any[];
  actions?: ActionProps;
};

const CustomTable: React.FC<EmployeeTableProps> = ({
  columns,
  data,
  actions,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleColumns, setVisibleColumns] = useState<string[]>(
    columns.map((col) => col.id)
  );
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "asc" | "desc";
  } | null>(null);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const open = Boolean(anchorEl);
  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleColumnToggle = (id: string) => {
    setVisibleColumns((prev) =>
      prev.includes(id) ? prev.filter((col) => col !== id) : [...prev, id]
    );
  };

  const handleSort = (id: string) => {
    if (sortConfig?.key === id) {
      setSortConfig({
        key: id,
        direction: sortConfig.direction === "asc" ? "desc" : "asc",
      });
    } else {
      setSortConfig({ key: id, direction: "asc" });
    }
  };

  const sortedData = useMemo(() => {
    if (!sortConfig) return data;
    return [...data].sort((a, b) => {
      const aVal = a[sortConfig.key];
      const bVal = b[sortConfig.key];
      if (aVal === bVal) return 0;
      if (sortConfig.direction === "asc") return aVal > bVal ? 1 : -1;
      return aVal < bVal ? 1 : -1;
    });
  }, [data, sortConfig]);

  const filteredData = useMemo(() => {
    return sortedData.filter((row) =>
      Object.values(row)
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  }, [sortedData, searchTerm]);

  const paginatedData = useMemo(() => {
    const start = page * rowsPerPage;
    return filteredData.slice(start, start + rowsPerPage);
  }, [filteredData, page, rowsPerPage]);

  return (
    <Paper sx={{ width: "100%", overflowX: "auto" }}>
      {/* Search + Settings */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={2}
        flexWrap="wrap"
        gap={2}
      >
        <Box
          bgcolor={"#f5f6fa"}
          p={1}
          borderRadius={2}
          display="flex"
          alignItems="center"
          gap={1}
        >
          <FiSearch size={20} />
          <InputBase
            placeholder="Search…"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ ml: 1, flex: 1, minWidth: "200px" }}
          />
        </Box>
        <IconButton onClick={handleMenuClick}>
          <FiSettings />
        </IconButton>
        <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
          {columns.map((col) => (
            <MenuItem key={col.id}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={visibleColumns.includes(col.id)}
                    onChange={() => handleColumnToggle(col.id)}
                  />
                }
                label={col.label}
              />
            </MenuItem>
          ))}
        </Menu>
      </Box>

      {/* No Data Message */}
      {!filteredData.length ? (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="300px"
          py={4}
          color="text.secondary"
        >
          <Typography variant="h6" gutterBottom>
            No Data Found
          </Typography>
          <Typography variant="body2" color="text.disabled">
            Try changing your filters or search keyword.
          </Typography>
        </Box>
      ) : (
        <>
          {/* Table */}
          <Box
            sx={{
              width: "100%",
              overflowX: {
                xs: "auto", // Scroll horizontally on extra-small screens (mobile)
                sm: "auto", // Scroll on small screens too
                md: "visible", // No scroll on medium+ screens
              },
            }}
          >
            <TableContainer component={Box}>
              <Table stickyHeader size="small">
                <TableHead>
                  <TableRow>
                    {columns.map((column) =>
                      visibleColumns.includes(column.id) ? (
                        <TableCell
                          key={column.id}
                          sx={{
                            fontWeight: "bold",
                            minWidth: column.minWidth || 100,
                            whiteSpace: "nowrap", // prevents wrapping
                          }}
                          onClick={() =>
                            column.sortable && handleSort(column.id)
                          }
                        >
                          {column.label}
                          {column.sortable && sortConfig?.key === column.id && (
                            <Typography component="span" ml={1}>
                              {sortConfig.direction === "asc" ? "↑" : "↓"}
                            </Typography>
                          )}
                        </TableCell>
                      ) : null
                    )}
                    {actions && (
                      <TableCell
                        sx={{ fontWeight: "bold", whiteSpace: "nowrap" }}
                      >
                        Actions
                      </TableCell>
                    )}
                  </TableRow>
                </TableHead>

                <TableBody>
                  {paginatedData.map((row, rowIndex) => (
                    <TableRow hover key={rowIndex}>
                      {columns.map((column) =>
                        visibleColumns.includes(column.id) ? (
                          <TableCell key={column.id}>
                            {column.render
                              ? column.render(row)
                              : row[column.id]}
                          </TableCell>
                        ) : null
                      )}
                      {actions && (
                        <TableCell
                          sx={{
                            display: "flex",
                            gap: 1,
                            flexWrap: "wrap !important",
                          }}
                        >
                          <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => actions.onView(row)}
                          >
                            View
                          </Button>
                          {actions?.onDelete && (
                            <Button
                              variant="outlined"
                              color="error"
                              onClick={() => actions.onDelete?.(row)}
                            >
                              <RxCross2 /> Remove
                            </Button>
                          )}
                        </TableCell>
                      )}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          {/* Pagination */}
          <TablePagination
            component="div"
            count={filteredData.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[5, 10, 25, 50]}
          />
        </>
      )}
    </Paper>
  );
};

export default CustomTable;
