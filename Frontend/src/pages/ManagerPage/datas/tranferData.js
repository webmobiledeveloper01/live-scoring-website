// import { randomId } from '@mui/x-data-grid-generator'
import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

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
import { useDispatch } from 'react-redux'

export const initialRows = [
  {
    id: randomId(),
    team: {
      icon: 'https://lsm-static-prod.livescore.com/medium/enet/9825.png',
      text: 'Arsenal'
    },
    player: 'Esdaille Dj',
    period: {
      icon: 'https://lsm-static-prod.livescore.com/medium/enet/8633.png',
      text: 'Real Madrid',
      type: 'from'
    },
    date: '01/01/2024',
    status: 'pending'
  },
  {
    id: randomId(),
    date: '01/01/2024',
    team: {
      icon: 'https://lsm-static-prod.livescore.com/medium/enet/8633.png',
      text: 'Real Madrid'
    },
    player: 'Trueman Reece',
    period: {
      icon: 'https://lsm-static-prod.livescore.com/medium/enet/9825.png',
      text: 'Arsenal',
      type: 'to'
    },
    status: 'compeleted'
  },
  {
    id: randomId(),
    date: '01/01/2024',
    team: {
      icon: 'https://lsm-static-prod.livescore.com/medium/enet/9825.png',
      text: 'Arsenal'
    },
    player: 'Esdaille Dj',
    period: {
      icon: 'https://lsm-static-prod.livescore.com/medium/enet/8633.png',
      text: 'Real Madrid',
      type: 'from'
    },
    status: 'pending'
  },
  {
    id: randomId(),
    date: '01/01/2024',
    team: {
      icon: 'https://lsm-static-prod.livescore.com/medium/enet/8633.png',
      text: 'Real Madrid'
    },
    player: 'Trueman Reece',
    period: {
      icon: 'https://lsm-static-prod.livescore.com/medium/enet/9825.png',
      text: 'Arsenal',
      type: 'to'
    },
    status: 'compeleted'
  },
  {
    id: randomId(),
    date: '01/01/2024',
    team: {
      icon: 'https://lsm-static-prod.livescore.com/medium/enet/9825.png',
      text: 'Arsenal'
    },
    player: 'Esdaille Dj',
    period: {
      icon: 'https://lsm-static-prod.livescore.com/medium/enet/8633.png',
      text: 'Real Madrid',
      type: 'from'
    },
    status: 'pending'
  },
  {
    id: randomId(),
    date: '01/01/2024',
    team: {
      icon: 'https://lsm-static-prod.livescore.com/medium/enet/8633.png',
      text: 'Real Madrid'
    },
    player: 'Trueman Reece',
    period: {
      icon: 'https://lsm-static-prod.livescore.com/medium/enet/9825.png',
      text: 'Arsenal',
      type: 'to'
    },
    status: 'compeleted'
  }
]

export const columns = [
  {
    field: 'date',
    headerName: 'Date',
    editable: false,
    type: 'Date',
    editable: true,
    width: '100'
  },
  {
    field: 'player',
    headerName: 'Player',
    type: 'text',
    align: 'left',
    headerAlign: 'left',
    editable: false,
    minWidth: 150,
    flex: 1,
    editable: true
  },
  {
    field: 'team',
    headerName: 'From',
    editable: false,
    minWidth: 180,
    flex: 1,
    editable: true,

    renderCell: params => {
      return (
        <div className='d-flex align-center'>
          <img
            src={params.row.team.icon}
            style={{ width: '30px', marginRight: 3 }}
          />
          <span>{params.row.team.text}</span>
        </div>
      )
    }
  },
  {
    field: 'period',
    headerName: 'To',
    minWidth: 220,
    flex: 1,
    editable: true,
    renderCell: params => {
      return (
        <div className='d-flex align-center'>
          {/* {params.row.period.type == 'from' ? (
            <ArrowBackIcon sx={{ color: 'green' }} />
          ) : (
            <ArrowForwardIcon sx={{ color: 'red' }} />
          )} */}
          <img
            src={params.row.period.icon}
            style={{ width: '30px', marginRight: 3 }}
          />
          <span>{params.row.period.text}</span>
        </div>
      )
    }
  },
  {
    field: 'status',
    headerName: 'STATUS',
    width: 150,
    align: 'left',
    headerAlign: 'left',
    editable: false,
    type: 'singleSelect',
    valueOptions: ['compeleted', 'pending'],
    renderCell: params => {
      const value = params.value
      if (value === 'compeleted') return <font color='green'>{value}</font>
      else return <font color='darkgoldenrod'>{value}</font>
    }
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
        &nbsp;&nbsp;add transfer request
      </button>

      <Dialog open={open} onClose={handleClose}>
        <div className='bg-[#061727]'>
          <DialogTitle>Edit transfer request</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin='dense'
              label='Player'
              type='text'
              fullWidth
              // value={initialRows.name}
              // onChange={e =>
              //   setinitialRows({ ...initialRows, name: e.target.value })
              // }
            />
            <TextField
              margin='dense'
              label='From team'
              type='text'
              fullWidth
              // value={initialRows.pos}
              // onChange={e =>
              //   setinitialRows({ ...initialRows, pos: e.target.value })
              // }
            />
            <TextField
              margin='dense'
              label='To team'
              type='text'
              fullWidth
              // value={initialRows.avatar}
              // onChange={e =>
              //   setinitialRows({ ...initialRows, avatar: e.target.value })
              // }
            />
            {/* <TextField
            margin='dense'
            label='Jersey Number'
            type='text'
            fullWidth
            // value={initialRows.avatar}
            // onChange={e =>
            //   setinitialRows({ ...initialRows, avatar: e.target.value })
            // }
          /> */}
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
