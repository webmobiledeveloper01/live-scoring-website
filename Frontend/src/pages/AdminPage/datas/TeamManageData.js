import React, { useState } from 'react'
// import { Avatar } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import clsx from 'clsx'
import { Search, SearchIconWrapper, StyledInputBase } from '../../../styled'

import { GridToolbarContainer } from '@mui/x-data-grid'
import { randomId, randomArrayItem } from '@mui/x-data-grid-generator'
import { useDispatch } from 'react-redux'
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
// import SearchIcon from '@mui/icons-material/Search'
// import { SearchIconWrapper, StyledInputBase } from '../../../styled'
import { requestPlayer } from '../../../redux/actions'
// import { randomTraderName, randomId } from '@mui/x-data-grid-generator'
// import { GridToolbarContainer } from '@mui/x-data-grid'

const roles = ['Active', 'Request Approval']
const randomRole = () => {
  return randomArrayItem(roles)
}

export const initialRows = [
  {
    id: randomId(),
    team: 'Arsenal',
    avatar: 'https://lsm-static-prod.livescore.com/medium/enet/9825.png',
    manager: 'jacob jones',
    status: randomRole(),
    ofplayer: 19,
    userName: 'manager@124',
    pass: '1234jfjdsa'
  },
  {
    id: randomId(),
    team: 'Arsenal',
    avatar: 'https://lsm-static-prod.livescore.com/medium/enet/9825.png',
    manager: 'jacob jones',
    status: randomRole(),
    ofplayer: 19,
    userName: 'manager@124',
    pass: '1234jfjdsa'
  },
  {
    id: randomId(),
    team: 'Arsenal',
    avatar: 'https://lsm-static-prod.livescore.com/medium/enet/9825.png',
    manager: 'jacob jones',
    status: randomRole(),
    ofplayer: 19,
    userName: 'manager@124',
    pass: '1234jfjdsa'
  },
  {
    id: randomId(),
    team: 'Arsenal',
    avatar: 'https://lsm-static-prod.livescore.com/medium/enet/9825.png',
    manager: 'jacob jones',
    status: randomRole(),
    ofplayer: 19,
    userName: 'manager@124',
    pass: '1234jfjdsa'
  },
  {
    id: randomId(),
    team: 'Arsenal',
    avatar: 'https://lsm-static-prod.livescore.com/medium/enet/9825.png',
    manager: 'jacob jones',
    status: randomRole(),
    ofplayer: 19,
    userName: 'manager@124',
    pass: '1234jfjdsa'
  },
  {
    id: randomId(),
    team: 'Arsenal',
    avatar: 'https://lsm-static-prod.livescore.com/medium/enet/9825.png',
    manager: 'jacob jones',
    status: randomRole(),
    ofplayer: 19,
    userName: 'manager@124',
    pass: '1234jfjdsa'
  }
]
export const columns = [
  {
    field: 'team',
    headerName: 'TEAM',
    width: 220,
    editable: false,
    renderCell: params => {
      return (
        <div className='d-flex'>
          <Avatar
            src={params.row.avatar}
            sx={{ margin: '10px 3px', width: '30px', height: '30px' }}
          />
          <span>{params.row.team}</span>
        </div>
      )
    }
  },
  {
    field: 'manager',
    headerName: 'Manager',
    type: 'text',
    width: 180,
    align: 'left',
    headerAlign: 'left',
    editable: true
  },
  {
    field: 'userName',
    headerName: 'UserName',
    type: 'text',
    width: 180,
    align: 'left',
    headerAlign: 'left',
    editable: true
  },
  {
    field: 'pass',
    headerName: 'Password',
    type: 'Number',
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
          className={clsx(
            params.row.status == 'Active' ? 'text-success' : 'text-warning'
          )}
        >
          {params.row.status}
        </span>
      )
    }
  },
  {
    field: 'ofplayer',
    headerName: '#OF PLAYER',
    type: 'text',
    width: 50,
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
        &nbsp;&nbsp;add new manager
      </button>

      <Dialog open={open} onClose={handleClose}>
        <div className='bg-[#061727]'>
          <DialogTitle>add new manager</DialogTitle>
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
              autoFocus
              margin='dense'
              label='Email'
              type='email'
              fullWidth
              // value={initialRows.name}
              // onChange={e =>
              //   setinitialRows({ ...initialRows, name: e.target.value })
              // }
            />
            <TextField
              margin='dense'
              label='Password'
              type='text'
              fullWidth
              // value={initialRows.pos}
              // onChange={e =>
              //   setinitialRows({ ...initialRows, pos: e.target.value })
              // }
            />
            <TextField
              margin='dense'
              label='Contact No.'
              type='number'
              fullWidth
              // value={initialRows.pos}
              // onChange={e =>
              //   setinitialRows({ ...initialRows, pos: e.target.value })
              // }
            />
            <TextField
              margin='dense'
              label='team'
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
