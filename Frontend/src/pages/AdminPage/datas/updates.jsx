import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import SearchIcon from '@mui/icons-material/Search';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { DataGrid, GridToolbarContainer } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { requestPlayer } from '../../../redux/actions';
import { Search, SearchIconWrapper, StyledInputBase } from '../../../styled';

// Toolbar component with search and add update functionality
export function EditToolbarr({ setRows }) {
  const [searched, setSearched] = useState('');
  const [open, setOpen] = useState(false);
  const [currentRow, setCurrentRow] = useState({
    title: '',
    description: '',
    status: 1,
  });
  const dispatch = useDispatch();

  const handleRequestPlayer = () => {
    dispatch(requestPlayer());
  };

  const requestSearch = (e) => {
    const searchedVal = e.target.value.toLowerCase();
    setSearched(searchedVal);
    setRows((prevRows) =>
      prevRows.filter((row) => row.title.toLowerCase().includes(searchedVal))
    );
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = async () => {
    try {
      const now = new Date().toISOString();
      const response = await fetch('https://live-scoring-website-vjrd.onrender.com/api/official-updates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...currentRow,
          createdAt: now,
          updatedAt: now,
        }),
      });

      if (!response.ok) throw new Error('Failed to add update');

      const newUpdate = await response.json();
      setRows((prevRows) => [
        ...prevRows,
        {
          id: newUpdate.id,
          title: newUpdate.title,
          description: newUpdate.description,
          status: newUpdate.status,
          createdAt: new Date(newUpdate.createdAt).toLocaleString(),
          updatedAt: new Date(newUpdate.updatedAt).toLocaleString(),
        },
      ]);
      handleClose();
    } catch (error) {
      console.error('Error adding update:', error);
    }
  };

  return (
    <GridToolbarContainer
      sx={{ display: 'flex', justifyContent: 'space-between', margin: '8px 0' }}
    >
      <Search sx={{ borderRadius: 25 }}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          value={searched}
          onChange={requestSearch}
        />
      </Search>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        <PersonAddAltOutlinedIcon />
        &nbsp;&nbsp;Add Update
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Update</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            type="text"
            fullWidth
            value={currentRow.title}
            onChange={(e) => setCurrentRow({ ...currentRow, title: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Description"
            type="text"
            fullWidth
            value={currentRow.description}
            onChange={(e) => setCurrentRow({ ...currentRow, description: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Status"
            type="number"
            fullWidth
            value={currentRow.status}
            onChange={(e) => setCurrentRow({ ...currentRow, status: Number(e.target.value) })}
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

export default function OfficialUpdates() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetchOfficialUpdates();
  }, []);

  const fetchOfficialUpdates = async () => {
    try {
      const response = await fetch('https://live-scoring-website-vjrd.onrender.com/api/official-updates');
      if (!response.ok) throw new Error('Failed to fetch official updates');
      const data = await response.json();
      console.log("Fetched data:", data);
      setRows(data.map(update => ({
        id: update.id,
        title: update.title,
        description: update.description,
        status: update.status,
        createdAt: new Date(update.createdAt).toLocaleString(),
        updatedAt: new Date(update.updatedAt).toLocaleString(),
      })));
    } catch (error) {
      console.error('Error fetching official updates:', error);
    }
  };

  return (
    <div className="official-updates-container">
      <EditToolbarr setRows={setRows} />
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columnss}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 15]}
          checkboxSelection
          disableSelectionOnClick
          sx={{
            boxShadow: 2,
            border: 2,
            borderColor: 'primary.light',
            '& .MuiDataGrid-cell:hover': {
              color: 'primary.main',
            },
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: '#1c1c1e',
              color: '#ffffff',
            },
            '& .MuiDataGrid-footerContainer': {
              backgroundColor: '#1c1c1e',
              color: '#ffffff',
            },
            '& .MuiDataGrid-row': {
              '&:nth-of-type(odd)': {
                backgroundColor: '#f5f5f5',
              },
            },
          }}
        />
      </div>
    </div>
  );
}
