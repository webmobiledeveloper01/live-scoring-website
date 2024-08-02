import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined'
import SearchIcon from '@mui/icons-material/Search'
import { Search, SearchIconWrapper, StyledInputBase } from '../../../styled'
import { randomTraderName, randomId } from '@mui/x-data-grid-generator'

import { GridRowModes, GridToolbarContainer } from '@mui/x-data-grid'
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
    name: randomTraderName(),
    avatar: '/images/avatar/player.jpg',
    pos: 'Coach',
    // JoinDate: 'Coach',
    Email: 'Coach',
    Contact: 'Coach',
    date: '01/01/2024',
    status: 'pending'
  },
  {
    id: 2,
    name: randomTraderName(),
    avatar: '/images/avatar/player.jpg',
    pos: 'Coach',
    // JoinDate: 'Coach',
    Email: 'Coach',
    Contact: 'Coach',
    date: '01/01/2024',
    status: 'pending'
  },
  {
    id: 3,
    name: randomTraderName(),
    avatar: '/images/avatar/player.jpg',
    pos: 'Coach',
    // JoinDate: 'Coach',
    Email: 'Coach',
    Contact: 'Coach',
    date: '01/01/2024',
    status: 'pending'
  }
]

export const columns = [
  {
    field: 'id',
    headerName: 'No.',
    type: 'text',
    width: 50,
    align: 'left',
    headerAlign: 'left'
  },
  {
    field: 'user',
    headerName: 'Name',
    width: 300,
    editable: false,
    renderCell: params => {
      return (
        <div className='d-flex'>
          <Avatar src={params.row.avatar} sx={{ marginRight: 3 }} />
          <span>{params.row.name}</span>
        </div>
      )
    }
  },
  {
    field: 'pos',
    headerName: 'Position',
    type: 'text',
    width: 100,
    align: 'left',
    headerAlign: 'left',
    editable: true
  },
  {
    field: 'date',
    headerName: 'JoinDate',
    type: 'text',
    width: 100,
    align: 'left',
    headerAlign: 'left',
    editable: true
  },
  {
    field: 'Email',
    headerName: 'Email',
    type: 'text',
    width: 100,
    align: 'left',
    headerAlign: 'left',
    editable: true
  },
  {
    field: 'Contact',
    headerName: 'Contact',
    type: 'text',
    width: 100,
    align: 'left',
    headerAlign: 'left',
    editable: true
  },
  {
    field: 'status',
    headerName: 'Status',
    type: 'text',
    width: 100,
    align: 'left',
    headerAlign: 'left',
    editable: true
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

  const requestSearch = e => {
    const searchedVal = e.target.value
    const filteredRows = initialRows.filter(row => {
      setSearched(searchedVal)
      return row.name.toLowerCase().includes(searchedVal.toLowerCase())
    })
    setRows(oldRows => [...filteredRows])
  }

  const cancelSearch = () => {
    setSearched('')
    requestSearch('')
  }

  const handleClick = () => {
    const id = randomId()
    setRows(oldRows => [...oldRows, { id, user: '', pos: '', isNew: true }])
    setRowModesModel(oldModel => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'pos' }
    }))
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
          onCancelSearch={() => cancelSearch()}
        />
      </Search>
      <button className='pull-btn' color='primary' onClick={handleOpen}>
        <PersonAddAltOutlinedIcon />
        &nbsp;&nbsp;Add New player
      </button>

      <Dialog
        className='!bg-[#001835d4]  play'
        open={open}
        onClose={handleClose}
      >
        <div className='bg-[#061727]'>
          <DialogTitle>Edit Official</DialogTitle>
          <DialogContent>
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
              label='Position'
              type='text'
              fullWidth
              // value={initialRows.pos}
              // onChange={e =>
              //   setinitialRows({ ...initialRows, pos: e.target.value })
              // }
            />

            <TextField
              margin='dense'
              label='Jersey Number'
              type='text'
              fullWidth
              // value={initialRows.avatar}
              // onChange={e =>
              //   setinitialRows({ ...initialRows, avatar: e.target.value })
              // }
            />
            <TextField
              margin='dense'
              label='Join date'
              type='date'
              fullWidth
              // value={initialRows.avatar}
              // onChange={e =>
              //   setinitialRows({ ...initialRows, avatar: e.target.value })
              // }
            />
            <TextField
              margin='dense'
              label='Email'
              type='email'
              fullWidth
              // value={initialRows.avatar}
              // onChange={e =>
              //   setinitialRows({ ...initialRows, avatar: e.target.value })
              // }
            />
            <TextField
              margin='dense'
              label='Contact Number'
              type='text'
              fullWidth
              // value={initialRows.avatar}
              // onChange={e =>
              //   setinitialRows({ ...initialRows, avatar: e.target.value })
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
