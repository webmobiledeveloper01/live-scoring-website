import React, { useState } from 'react'
import clsx from 'clsx'
import { randomId, randomArrayItem } from '@mui/x-data-grid-generator'
import { useDispatch } from 'react-redux'
// import { GridToolbarContainer } from '@mui/x-data-grid'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from '@mui/material'
import Avatar from '@mui/material/Avatar'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined'
import SearchIcon from '@mui/icons-material/Search'
import { Search, SearchIconWrapper, StyledInputBase } from '../../../styled'
import { requestPlayer } from '../../../redux/actions'
// import { randomTraderName, randomId } from '@mui/x-data-grid-generator'
import { GridToolbarContainer } from '@mui/x-data-grid'

const roles = ['Active', 'Request Approval']
const randomRole = () => {
  return randomArrayItem(roles)
}
export const initialRows = [
  {
    id: 1,
    name: 'Champions Cup',
    teams: 'Team Alpha, Team Beta',
    status: 'Active',
    startDate: '2024-07-01',
    endDate: '2024-07-15',
    logo: 'https://via.placeholder.com/50',
    sponsor: 'Sponsor A'
  },
  {
    id: 2,
    name: 'Summer Slam',
    teams: 'Team Gamma, Team Delta',
    status: 'Active',
    startDate: '2024-08-01',
    endDate: '2024-08-15',
    logo: 'https://via.placeholder.com/50',
    sponsor: 'Sponsor B'
  },
  {
    id: 3,
    name: 'Winter Classic',
    teams: 'Team Epsilon, Team Zeta',
    status: 'Scheduled',
    startDate: '2024-09-01',
    endDate: '2024-09-15',
    logo: 'https://via.placeholder.com/50',
    sponsor: 'Sponsor C'
  }
]
export const columns = [
  {
    field: 'id',
    headerName: 'No',
    type: 'text',
    width: 50,
    align: 'left',
    headerAlign: 'left',
    editable: true
  },
  {
    field: 'team',
    headerName: 'Tournament',
    width: 220,
    editable: false,
    renderCell: params => {
      return (
        <div className='d-flex'>
          <Avatar
            src={params.row.logo}
            sx={{ margin: '10px 10px', width: '30px', height: '30px' }}
          />
          <span>{params.row.name}</span>
        </div>
      )
    }
  },
  {
    field: 'teams',
    headerName: 'teams',
    type: 'text',
    width: 180,
    align: 'left',
    headerAlign: 'left',
    editable: true
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 150,
    editable: true,
    type: 'singleSelect',
    valueOptions: ['Active', 'Request Approval'],
    renderCell: params => {
      return (
        <span
          className={
            params.row.status == 'Active' ? 'text-green' : 'text-warning'
          }
        >
          {params.row.status}
        </span>
      )
    }
  },
  {
    field: 'startDate',
    headerName: 'StartDate',
    type: 'text',
    width: 100,
    editable: true
  },
  {
    field: 'endDate',
    headerName: 'EndDate',
    type: 'text',
    width: 100,
    editable: true
  },
  {
    field: 'sponsor',
    headerName: 'Sponsor',
    type: 'text',
    width: 100,
    editable: true
  }
]

export function EditToolbar (props) {
  const { setRows, setRowModesModel } = props
  const [searched, setSearched] = React.useState('')
  const dispatch = useDispatch()
  const handleRequstPlayer = () => {
    dispatch(requestPlayer())
  }

  const requestSearch = e => {
    const searchedVal = e.target.value
    const filteredRows = initialRows.filter(row => {
      setSearched(searchedVal)
      return row.name.toLowerCase().includes(searchedVal.toLowerCase())
    })
    setRows(oldRows => [...filteredRows])
  }
  const [open, setOpen] = useState(false)

  const handleSave = () => {
    setRows(prevRows =>
      prevRows.map(row => (row.id === currentRow.id ? currentRow : row))
    )
    handleClose()
  }
  const handleOpen = row => {
    // setCurrentRow(row)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    // setCurrentRow({ id: '', name: '', pos: '', avatar: '' })
  }

  return (
    <GridToolbarContainer
      sx={{ display: 'flex', justifyContent: 'space-between', margin: '8px 0' }}
    >
      <Search sx={{ borderRadius: 25 }}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder='Search…'
          inputProps={{ 'aria-label': 'search' }}
          value={searched}
          onChange={requestSearch}
        />
      </Search>
      <button className='pull-btn' color='primary' onClick={handleOpen}>
        <PersonAddAltOutlinedIcon />
        &nbsp;&nbsp;add new tournament
      </button>

      <Dialog open={open} onClose={handleClose}>
        <div className='bg-[#061727]'>
          <DialogTitle>add new tournament</DialogTitle>
          <DialogContent className='bg-[#061727]'>
            <TextField
              autoFocus
              margin='dense'
              label='Tournament Name'
              type='text'
              fullWidth
              // value={initialRows.name}
              // onChange={e =>
              //   setinitialRows({ ...initialRows, name: e.target.value })
              // }
            />
            <TextField
              margin='dense'
              label='teams'
              type='text'
              fullWidth
              // value={initialRows.pos}
              // onChange={e =>
              //   setinitialRows({ ...initialRows, pos: e.target.value })
              // }
            />
            <TextField
              margin='dense'
              label='status'
              type='text'
              fullWidth
              // value={initialRows.avatar}
              // onChange={e =>
              //   setinitialRows({ ...initialRows, avatar: e.target.value })
              // }
            />
            <TextField
              margin='dense'
              label='start date'
              type='date'
              fullWidth
              // value={initialRows.avatar}
              // onChange={e =>
              //   setinitialRows({ ...initialRows, avatar: e.target.value })
              // }
            />
            <TextField
              margin='dense'
              label='End date'
              type='date'
              fullWidth
              // value={initialRows.avatar}
              // onChange={e =>
              //   setinitialRows({ ...initialRows, avatar: e.target.value })
              // }
            />
            <TextField
              margin='dense'
              label='Sponsor'
              type='text'
              fullWidth
              // value={initialRows.avatar}
              // onChange={e =>
              //   setinitialRows({ ...initialRows, avatar: e.target.value })
              // }
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Save</Button>
          </DialogActions>
        </div>
      </Dialog>
    </GridToolbarContainer>
  )
}
