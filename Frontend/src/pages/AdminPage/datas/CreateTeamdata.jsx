import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import SearchIcon from "@mui/icons-material/Search";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { GridToolbarContainer } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Search, SearchIconWrapper, StyledInputBase } from "../../../styled";

export const columns = [
  {
    field: "id",
    headerName: "No.",
    width: 50,
    align: "left",
    headerAlign: "left",
    type: "singleSelect",
  },
  {
    field: "logo",
    headerName: "Logo",
    width: 100,
    align: "left",
    headerAlign: "left",
    type: "singleSelect",
    renderCell: (params) => (
      <div className="d-flex">
        <Avatar src={params.row.logo} sx={{ margin: "5px 20px 5px 0" }} />
      </div>
    ),
  },
  {
    field: "name",
    headerName: "Name",
    width: 150,
    editable: false,
    renderCell: (params) => (
      <div className="d-flex">
        <span>{params.row.name}</span>
      </div>
    ),
  },
  {
    field: "contact",
    headerName: "Contact",
    width: 150,
    align: "left",
    headerAlign: "left",
    type: "singleSelect",
    editable: true,
  },
  {
    field: "description",
    headerName: "Description",
    width: 250,
    editable: true,
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

export function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;
  const [teams, setTeams] = useState([]);
  const [managers, setManagers] = useState([]);
  const [searched, setSearched] = useState("");
  const [open, setOpen] = useState(false);
  const [newTeam, setNewTeam] = useState({
    name: "",
    logo: "",
    contact: "",
    description: "",
    status: 1,
    manager_id: "",
  });

  useEffect(() => {
    fetchTeams();
    fetchManagers();
  }, []);

  const fetchTeams = async () => {
    try {
      const response = await axios.get(
        "https://live-scoring-website-vjrd.onrender.com/api/teams"
      );
      const formattedData = response.data.map((team) => ({
        ...team,
        contact: team.contact_details,
      }));
      setTeams(formattedData);
      setRows(formattedData);
    } catch (error) {
      console.error("Error fetching teams:", error);
    }
  };

  const fetchManagers = async () => {
    try {
      const response = await axios.get(
        "https://live-scoring-website-vjrd.onrender.com/api/managers"
      );
      setManagers(response.data);
    } catch (error) {
      console.error("Error fetching managers:", error);
    }
  };

  const requestSearch = (e) => {
    const searchedVal = e.target.value.toLowerCase();
    setSearched(searchedVal);
    const filteredRows = teams.filter((row) =>
      row.name.toLowerCase().includes(searchedVal)
    );
    setRows(filteredRows);
  };

  const handleSave = async () => {
    try {
      const teamToSave = {
        ...newTeam,
        contact_details: newTeam.contact,
      };

      const response = await axios.post(
        "https://live-scoring-website-vjrd.onrender.com/api/teams",
        teamToSave
      );
      setTeams([...teams, response.data]);
      setRows([...teams, response.data]);
      handleClose();
    } catch (error) {
      console.error("Error saving team:", error);
    }
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          onChange={requestSearch}
        />
      </Search>
      <Button color="primary" onClick={handleOpen}>
        <PersonAddAltOutlinedIcon />
        &nbsp;&nbsp;Add New Team
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Team</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            value={newTeam.name}
            onChange={(e) => setNewTeam({ ...newTeam, name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Logo"
            type="text"
            fullWidth
            value={newTeam.logo}
            onChange={(e) => setNewTeam({ ...newTeam, logo: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Contact"
            type="text"
            fullWidth
            value={newTeam.contact}
            onChange={(e) =>
              setNewTeam({ ...newTeam, contact: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Description"
            type="text"
            fullWidth
            value={newTeam.description}
            onChange={(e) =>
              setNewTeam({ ...newTeam, description: e.target.value })
            }
          />
          <FormControl fullWidth margin="dense">
            <InputLabel>Manager</InputLabel>
            <Select
              value={newTeam.manager_id}
              onChange={(e) =>
                setNewTeam({ ...newTeam, manager_id: e.target.value })
              }
            >
              <MenuItem value="">None</MenuItem>
              {managers.map((manager) => (
                <MenuItem key={manager.id} value={manager.id}>
                  {manager.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            margin="dense"
            label="Status"
            type="number"
            fullWidth
            value={newTeam.status}
            onChange={(e) =>
              setNewTeam({ ...newTeam, status: parseInt(e.target.value) })
            }
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
