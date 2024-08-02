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
    name: 'Team A',
    playedMatch: 20,
    wins: 15,
    draws: 3,
    losses: 2,
    goalsFor: 45,
    goalsAgains: 20,
    cleansheet: 10,
    yellowcards: 25,
    redcards: 2,
    points: 48
  }
  //   {
  //     id: 2,
  //     name: 'Team B',
  //     playedMatch: 20,
  //     wins: 15,
  //     draws: 3,
  //     losses: 2,
  //     goalsFor: 45,
  //     goalsAgains: 20,
  //     cleansheet: 10,
  //     yellowcards: 25,
  //     redcards: 2,
  //     points: 48
  //   }
]

export const columns = [
  //   {
  //     field: 'id',
  //     headerName: 'No.',
  //     width: 70,
  //     align: 'left',
  //     headerAlign: 'left',
  //     type: 'singleSelect'
  //   },

  {
    field: 'playedMatch',
    headerName: 'played Matchs',
    width: 70,
    align: 'left',
    headerAlign: 'left',
    type: 'singleSelect'
    //     valueOptions: ['Goal Keeper', 'Defender', 'Midfielder'],
    //     editable: true,
    //     valueFormatter: (value, row, func) => {
    //       return func.valueOptions[value]
    //     }
  },
  {
    field: 'wins',
    headerName: 'Wins',
    width: 70,
    align: 'left',
    headerAlign: 'left',
    editable: true,
    type: 'number'
    // renderCell: params => {
    //   return params.value + '%'
    // }
  },
  {
    field: 'draws',
    headerName: 'Draws',
    width: 70,
    align: 'left',
    headerAlign: 'left',
    editable: true,
    type: 'singleSelect'
    //     valueOptions: ['Good Performance', 'Injury']
    //     renderCell: params => {
    //       const value = params.value
    //       if (value === 'Good Performance')
    //         return <font color='green'>{value}</font>
    //       else return <font color='red'>{value}</font>
    //     }
  },
  {
    field: 'losses',
    headerName: 'Losses',
    type: 'number',
    align: 'left',
    headerAlign: 'left',
    width: 70,
    editable: true
  },
  {
    field: 'goalsFor',
    headerName: 'GoalsFor',
    type: 'number',
    align: 'left',
    headerAlign: 'left',
    width: 70,
    editable: true
  },
  {
    field: 'goalsAgains',
    headerName: 'GoalsAgainst',
    type: 'number',
    align: 'left',
    headerAlign: 'left',
    width: 70,
    editable: true
  },
  {
    field: 'cleansheet',
    headerName: 'Cleansheet',
    type: 'number',
    align: 'left',
    headerAlign: 'left',
    width: 70,
    editable: true
  },
  {
    field: 'yellowcards',
    headerName: 'Yellowcards',
    type: 'number',
    align: 'left',
    headerAlign: 'left',
    width: 70,
    editable: true
  },
  {
    field: 'redcards',
    headerName: 'Redcards',
    type: 'number',
    align: 'left',
    headerAlign: 'left',
    width: 70,
    editable: true
  },
  {
    field: 'points',
    headerName: 'Points',
    type: 'number',
    align: 'left',
    headerAlign: 'left',
    width: 70,
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
      {/* <Search sx={{ borderRadius: 25 }}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder='Search…'
          inputProps={{ 'aria-label': 'search' }}
          value={searched}
          onChange={requestSearch}
        />
      </Search> */}
      {/* <button className='pull-btn' color='primary' onClick={handleOpen}>
        <PersonAddAltOutlinedIcon />
        &nbsp;&nbsp;add player into squad
      </button> */}

      <Dialog open={open} onClose={handleClose}>
        <div className='bg-[#061727]'>
          <DialogTitle>Edit Team details</DialogTitle>
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
              label='Jersey Number'
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
