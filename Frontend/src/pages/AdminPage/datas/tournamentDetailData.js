import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import SearchIcon from "@mui/icons-material/Search";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { GridToolbarContainer } from "@mui/x-data-grid";
import React from "react";
import { Search, SearchIconWrapper, StyledInputBase } from "../../../styled";

export const columns = [
  {
    field: "id",
    headerName: "No",
    width: 50,
    align: "left",
    headerAlign: "left",
    editable: false,
  },
  {
    field: "logo",
    headerName: "Logo",
    width: 80,
    renderCell: (params) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Avatar src={params.value} sx={{ width: 30, height: 30 }} />
      </div>
    ),
  },
  {
    field: "name",
    headerName: "Tournament",
    width: 220,
    editable: false,
  },
  {
    field: "description",
    headerName: "Description",
    width: 300,
    editable: false,
  },
  {
    field: "start_date",
    headerName: "Start Date",
    width: 150,
    editable: false,
    renderCell: (params) => new Date(params.value).toLocaleDateString(),
  },
  {
    field: "end_date",
    headerName: "End Date",
    width: 150,
    editable: false,
    renderCell: (params) => new Date(params.value).toLocaleDateString(),
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    editable: false,
    renderCell: (params) => (
      <span className={params.value === 1 ? "text-green" : "text-warning"}>
        {params.value === 1 ? "Active" : "Request Approval"}
      </span>
    ),
  },
  {
    field: "sponsor_id",
    headerName: "Sponsor ID",
    width: 150,
    editable: false,
  },
];

export function EditToolbar(props) {
  const { setRows, setRowModesModel, onAddTournament } = props;
  const [searched, setSearched] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [newTournament, setNewTournament] = React.useState({
    name: "",
    description: "",
    logo: "",
    startDate: "",
    endDate: "",
    status: 1,
    sponsorId: "",
  });

  const handleRequestSearch = (e) => {
    const searchedVal = e.target.value;
    setSearched(searchedVal);
    const filteredRows = props.rows.filter((row) =>
      row.name.toLowerCase().includes(searchedVal.toLowerCase())
    );
    setRows(filteredRows);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNewTournament({
      name: "",
      description: "",
      logo: "",
      startDate: "",
      endDate: "",
      status: 1,
      sponsorId: "",
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewTournament((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const payload = {
        name: newTournament.name,
        description: newTournament.description || "",
        logo: newTournament.logo,
        start_date: new Date(newTournament.startDate).toISOString(),
        end_date: new Date(newTournament.endDate).toISOString(),
        status: parseInt(newTournament.status),
        sponsor_id: newTournament.sponsorId || null,
      };

      console.log("Payload to be sent:", payload);

      const response = await fetch("http://localhost:8080/api/tournaments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to add tournament");
      const addedTournament = await response.json();
      onAddTournament(addedTournament);
      handleClose();
    } catch (error) {
      console.error("Error adding tournament:", error.message);
    }
  };

  return (
    <GridToolbarContainer
      sx={{ display: "flex", justifyContent: "space-between", margin: "8px 0" }}
    >
      <Search sx={{ borderRadius: 25 }}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          value={searched}
          onChange={handleRequestSearch}
        />
      </Search>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        <PersonAddAltOutlinedIcon />
        &nbsp;&nbsp;Add New Tournament
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Tournament</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Tournament Name"
            type="text"
            fullWidth
            value={newTournament.name}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="description"
            label="Description"
            type="text"
            fullWidth
            value={newTournament.description}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="logo"
            label="Logo URL"
            type="text"
            fullWidth
            value={newTournament.logo}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="startDate"
            label="Start Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={newTournament.startDate}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="endDate"
            label="End Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={newTournament.endDate}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="status"
            label="Status"
            type="number"
            fullWidth
            value={newTournament.status}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="sponsorId"
            label="Sponsor ID"
            type="number"
            fullWidth
            value={newTournament.sponsorId}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </GridToolbarContainer>
  );
}
