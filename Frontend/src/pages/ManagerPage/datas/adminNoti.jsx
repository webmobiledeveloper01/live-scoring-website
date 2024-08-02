import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Avatar from '@mui/material/Avatar'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined'
import SearchIcon from '@mui/icons-material/Search'
import { Search, SearchIconWrapper, StyledInputBase } from '../../../styled'
import { requestPlayer } from '../../../redux/actions'
import { randomTraderName, randomId } from '@mui/x-data-grid-generator'
import { GridToolbarContainer } from '@mui/x-data-grid'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from '@mui/material'

export const initialRowss = [
  {
    id: 1,
    name: 'FOOTBALL TEAM MANAGEMENT WEB APPLICATION /images/avatar/player.jpg',
    avatar: '/images/avatar/player.jpg',
    description: 'Defender',
    TournamentName: 'tournamentA',
    type: 'Good Performance',
    date: '01/01/2024',

    jersey: 22
  },
  {
    id: 2,
    name: 'FOOTBALL TEAM MANAGEMENT WEB APPLICATION /images/avatar/player.jpg',

    avatar: '/images/avatar/player.jpg',
    description: 'Midfielder',
    TournamentName: randomTraderName(),
    type: 'Injury',
    date: '01/01/2024',

    jersey: 22
  },
  {
    id: 3,
    name: 'FOOTBALL TEAM MANAGEMENT WEB APPLICATION /images/avatar/player.jpg',
    avatar: '/images/avatar/player.jpg',
    description: 'Midfielder',
    TournamentName: randomTraderName(),
    type: 'Injury',
    date: '01/01/2024',

    jersey: 22
  }
]

export const columnss = [
  {
    field: 'id',
    headerName: 'No.',
    width: 50,
    align: 'left',
    headerAlign: 'left',
    type: 'singleSelect'
  },
  {
    field: 'name',
    headerName: 'Title',
    width: 180,
    editable: true
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 100,
    editable: true
  },
  {
    field: 'type',
    headerName: 'Type',
    width: 100,
    editable: true
  },
  {
    field: 'date',
    headerName: 'Date',
    width: 100,
    editable: true
  }
]

export const contentMenu = [
  { text: 'Team updates' },
  { text: 'Admin updates' }
  //   { text: 'Tournament B' }
]

export function EditToolbarr (props) {
  const { setRows, setRowModesModel } = props
  const [searched, setSearched] = React.useState('')
  const dispatch = useDispatch()
  const handleRequstPlayer = () => {
    dispatch(requestPlayer())
  }

  const requestSearch = e => {
    const searchedVal = e.target.value
    const filteredRows = initialRowss.filter(row => {
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
      {/* <button className='pull-btn' color='primary' onClick={handleOpen}>
        <PersonAddAltOutlinedIcon />
        &nbsp;&nbsp;Add Update
      </button> */}

      <Dialog open={open} onClose={handleClose}>
        <div className='bg-[#061727]'>
          <DialogTitle>Edit Notification</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin='dense'
              label='Title'
              type='text'
              fullWidth
              // value={initialRows.name}
              // onChange={e =>
              //   setinitialRows({ ...initialRows, name: e.target.value })
              // }
            />
            <TextField
              margin='dense'
              label='description'
              type='text'
              fullWidth
              // value={initialRows.pos}
              // onChange={e =>
              //   setinitialRows({ ...initialRows, pos: e.target.value })
              // }
            />
            <TextField
              margin='dense'
              label='type'
              type='text'
              fullWidth
              // value={initialRows.avatar}
              // onChange={e =>
              //   setinitialRows({ ...initialRows, avatar: e.target.value })
              // }
            />
            <TextField
              margin='dense'
              //             label='date'
              type='date'
              fullWidth
              // value={initialRows.avatar}
              // onChange={e =>
              //   setinitialRows({ ...initialRows, avatar: e.target.value })
              // }
            />
            <TextField
              margin='dense'
              label='Publish by'
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
