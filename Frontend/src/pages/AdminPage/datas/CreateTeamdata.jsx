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

export const initialRows = [
  {
    id: 1,
    name: 'Team Alpha',
    logo: 'https://via.placeholder.com/50',
    contact: 'alpha@example.com',
    manager: 'John Doe',
    players: ['Player 1', 'Player 2'],
    avatar: '/images/avatar/player.jpg'
  },
  {
    id: 2,
    name: 'Team Beta',
    logo: 'https://via.placeholder.com/50',
    contact: 'beta@example.com',
    manager: 'Jane Smith',
    players: ['Player 3', 'Player 4'],
    avatar: '/images/avatar/player.jpg'
  },
  {
    id: 3,
    name: 'Team Gamma',
    logo: 'https://via.placeholder.com/50',
    contact: 'gamma@example.com',
    manager: 'Mike Johnson',
    players: ['Player 5', 'Player 6'],
    avatar: '/images/avatar/player.jpg'
  }
]

export const columns = [
  {
    field: 'id',
    headerName: 'No.',
    width: 50,
    align: 'left',
    headerAlign: 'left',
    type: 'singleSelect'
  },
  {
    field: 'logo',
    headerName: 'Logo.',
    width: 100,
    align: 'left',
    headerAlign: 'left',
    type: 'singleSelect',
    renderCell: params => {
      return (
        <div className='d-flex'>
          <Avatar src={params.row.logo} sx={{ margin: '5px 20px 5px 0' }} />
        </div>
      )
    }
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: false,
    renderCell: params => {
      return (
        <div className='d-flex'>
          {/* <Avatar src={params.row.avatar} sx={{ margin: '5px 20px 5px 0' }} /> */}
          <span>{params.row.name}</span>
        </div>
      )
    }
  },
  {
    field: 'contact',
    headerName: 'Contact',
    width: 150,
    align: 'left',
    headerAlign: 'left',
    type: 'singleSelect',
    valueOptions: ['Goal Keeper', 'Defender', 'Midfielder'],
    editable: true,
    valueFormatter: (value, row, func) => {
      return func.valueOptions[value]
    }
  },
  {
    field: 'manager',
    headerName: 'Manager',
    width: 120,
    align: 'left',
    headerAlign: 'left',
    editable: true,
    type: 'text'
    // renderCell: params => {
    //   return params.value + '%'
    // }
  },
  {
    field: 'players',
    headerName: 'Players',
    width: 120,
    align: 'left',
    headerAlign: 'left',
    editable: true,
    type: 'text'
    // renderCell: params => {
    //   return params.value + '%'
    // }
  }
]

export const contentMenu = [
  { text: 'All Squad' },
  { text: 'Tournament A' },
  { text: 'Tournament B' }
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
        &nbsp;&nbsp;add new player
      </button>

      <Dialog open={open} onClose={handleClose}>
        <div className='bg-[#061727]'>
          <DialogTitle>Add new Team</DialogTitle>
          <DialogContent className='bg-[#061727]'>
            <TextField
              autoFocus
              margin='dense'
              label='Name'
              type='text'
              fullWidth
              // value={initialRows.name}
              // onChange={e =>
              //   setinitialRows({ ...initialRows, name: e.target.value })
              // }
            />
            <TextField
              margin='dense'
              label='Logo'
              type='file'
              fullWidth
              // value={initialRows.pos}
              // onChange={e =>
              //   setinitialRows({ ...initialRows, pos: e.target.value })
              // }
            />
            <TextField
              margin='dense'
              label='contact'
              type='email'
              fullWidth
              // value={initialRows.avatar}
              // onChange={e =>
              //   setinitialRows({ ...initialRows, avatar: e.target.value })
              // }
            />
            <TextField
              margin='dense'
              label='team manager'
              type='text'
              fullWidth
              // value={initialRows.avatar}
              // onChange={e =>
              //   setinitialRows({ ...initialRows, avatar: e.target.value })
              // }
            />
            <TextField
              margin='dense'
              label='Players'
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
