import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import SearchIcon from "@mui/icons-material/Search";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputBase,
  TextField,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { DataGrid, GridToolbarContainer } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";

// Styled components
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const columns = [
  {
    field: "id",
    headerName: "No.",
    width: 50,
    align: "left",
    headerAlign: "left",
  },
  { field: "name", headerName: "Name", width: 180, editable: true },
  { field: "email", headerName: "Email", width: 250, editable: true },
  {
    field: "password",
    headerName: "Password",
    width: 180,
    editable: true,
    type: "password",
  },
  {
    field: "status",
    headerName: "Status",
    width: 100,
    editable: true,
    renderCell: (params) => (
      <span>{params.row.status ? "Active" : "Inactive"}</span>
    ),
  },
];

export default function ManagerTable() {
  const [rows, setRows] = useState([]);
  const [searched, setSearched] = useState("");
  const [open, setOpen] = useState(false);
  const [newManager, setNewManager] = useState({
    name: "",
    email: "",
    password: "",
    status: 1,
  });

  useEffect(() => {
    fetchManagers();
  }, []);

  const fetchManagers = async () => {
    try {
      const response = await axios.get("https://live-scoring-website-vjrd.onrender.com/api/managers");
      setRows(response.data);
    } catch (error) {
      console.error("Error fetching managers:", error);
    }
  };

  const requestSearch = (e) => {
    const searchedVal = e.target.value.toLowerCase();
    setSearched(searchedVal);
    const filteredRows = rows.filter((row) =>
      row.name.toLowerCase().includes(searchedVal)
    );
    setRows(filteredRows);
  };

  const handleSave = async () => {
    try {
      const response = await axios.post(
        "https://live-scoring-website-vjrd.onrender.com/api/managers",
        newManager
      );
      setRows((prevRows) => [...prevRows, response.data]);
      handleClose();
    } catch (error) {
      console.error("Error saving manager:", error);
    }
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{ height: 600, width: "100%" }}>
      <div style={{ marginBottom: 16 }}>
        <Button color="primary" onClick={handleOpen}>
          <PersonAddAltOutlinedIcon />
          &nbsp;&nbsp;Add New Manager
        </Button>
      </div>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        components={{
          Toolbar: () => (
            <GridToolbarContainer
              sx={{
                display: "flex",
                justifyContent: "space-between",
                margin: "8px 0",
              }}
            >
              <Search sx={{ borderRadius: 25 }}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  value={searched}
                  onChange={requestSearch}
                />
              </Search>
            </GridToolbarContainer>
          ),
        }}
        componentsProps={{
          toolbar: { setRows, rows },
        }}
      />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Manager</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            value={newManager.name}
            onChange={(e) =>
              setNewManager({ ...newManager, name: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            value={newManager.email}
            onChange={(e) =>
              setNewManager({ ...newManager, email: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            value={newManager.password}
            onChange={(e) =>
              setNewManager({ ...newManager, password: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Status"
            type="number"
            fullWidth
            value={newManager.status}
            onChange={(e) =>
              setNewManager({ ...newManager, status: parseInt(e.target.value) })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
