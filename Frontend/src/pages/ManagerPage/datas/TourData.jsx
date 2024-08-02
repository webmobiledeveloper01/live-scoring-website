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
    name: randomTraderName(),
    avatar: '/images/avatar/player.jpg',
    Position: 'Defender',
    startdate: '01/01/2024',
    enddate: '01/01/2024',
    status: 'Live',
    TournamentName: randomTraderName(),
    teams: ['Team 1', 'Team 2'],
    teamA: 'a',
    teamB: 'a',
    place: 'surat'
  },
  {
    id: 2,
    name: randomTraderName(),
    avatar: '/images/avatar/player.jpg',
    Position: 'Midfielder',
    TournamentName: randomTraderName(),
    startdate: '01/01/2024',
    enddate: '01/01/2024',
    status: 'Live',
    teamA: 'a',
    teams: ['Team 1', 'Team 2'],
    teamB: 'a',
    place: 'surat'
  },
  {
    id: 3,
    name: randomTraderName(),
    avatar: '/images/avatar/player.jpg',
    Position: 'Midfielder',
    TournamentName: randomTraderName(),
    startdate: '01/01/2024',
    enddate: '01/01/2024',
    status: 'Upcoming',
    teams: ['Team 1', 'Team 2'],
    teamA: 'a',
    teamB: 'a',
    place: 'surat'
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
    field: 'TournamentName',
    headerName: 'TournamentName',
    width: 150,
    editable: false
  },
  {
    field: 'startdate',
    headerName: 'StartDate',
    width: 150,
    editable: false
  },
  {
    field: 'enddate',
    headerName: 'Enddate',
    width: 150,
    editable: false
  },

  {
    field: 'teams',
    headerName: 'Teams',
    width: 250,
    editable: false
    //     renderCell: params => {
    //       //       const value = params.value
    //       {
    //         team.players.map((player, index) => <li key={index}>{player}</li>)
    //       }
    //     }
  },
  //   {
  //     field: 'Position',
  //     headerName: 'Position',
  //     width: 150,
  //     align: 'left',
  //     headerAlign: 'left',
  //     type: 'singleSelect',
  //     valueOptions: ['Goal Keeper', 'Defender', 'Midfielder'],
  //     editable: true,
  //     valueFormatter: (value, row, func) => {
  //       return func.valueOptions[value]
  //     }
  //   },

  {
    field: 'status',
    headerName: 'Status',
    width: 150,
    align: 'left',
    headerAlign: 'left',
    editable: true,
    type: 'singleSelect',
    valueOptions: ['Upcoming', 'Live'],
    renderCell: params => {
      const value = params.value
      if (value === 'Live') return <font color='green'>{value}</font>
      else if (value === 'Upcoming') return <font color='orange'>{value}</font>
      else return <font color='red'>{value}</font>
    }
  }
]

export const contentMenu = [
  { text: 'All tournaments' },
  { text: 'Participated Tournaments' },
  { text: 'Live tournaments' }
]

// export function EditToolbar (props) {
//   const { setRows, setRowModesModel } = props
//   const [searched, setSearched] = React.useState('')
//   const dispatch = useDispatch()
//   const handleRequstPlayer = () => {
//     dispatch(requestPlayer())
//   }

//   const requestSearch = e => {
//     const searchedVal = e.target.value
//     const filteredRows = initialRows.filter(row => {
//       setSearched(searchedVal)
//       return row.name.toLowerCase().includes(searchedVal.toLowerCase())
//     })
//     setRows(oldRows => [...filteredRows])
//   }
//   const [open, setOpen] = useState(false)

//   const handleSave = () => {
//     setRows(prevRows =>
//       prevRows.map(row => (row.id === currentRow.id ? currentRow : row))
//     )
//     handleClose()
//   }
//   const handleOpen = row => {
//     // setCurrentRow(row)
//     setOpen(true)
//   }

//   const handleClose = () => {
//     setOpen(false)
//     // setCurrentRow({ id: '', name: '', pos: '', avatar: '' })
//   }

//   return (
//     <GridToolbarContainer
//       sx={{ display: 'flex', justifyContent: 'space-between', margin: '8px 0' }}
//     >
//       <Search sx={{ borderRadius: 25 }}>
//         <SearchIconWrapper>
//           <SearchIcon />
//         </SearchIconWrapper>
//         <StyledInputBase
//           placeholder='Search…'
//           inputProps={{ 'aria-label': 'search' }}
//           value={searched}
//           onChange={requestSearch}
//         />
//       </Search>
//       {/* <button className='pull-btn' color='primary' onClick={handleOpen}>
//         <PersonAddAltOutlinedIcon />
//         &nbsp;&nbsp;add player into squad
//       </button> */}

//       <Dialog open={open} onClose={handleClose}>
//         <div className='bg-[#061727]'>
//           <DialogTitle>Edit Official</DialogTitle>
//           <DialogContent>
//             <TextField
//               autoFocus
//               margin='dense'
//               label='Name'
//               type='text'
//               fullWidth
//               // value={initialRows.name}
//               // onChange={e =>
//               //   setinitialRows({ ...initialRows, name: e.target.value })
//               // }
//             />
//             <TextField
//               margin='dense'
//               label='Position'
//               type='text'
//               fullWidth
//               // value={initialRows.pos}
//               // onChange={e =>
//               //   setinitialRows({ ...initialRows, pos: e.target.value })
//               // }
//             />
//             <TextField
//               margin='dense'
//               label='status'
//               type='text'
//               fullWidth
//               // value={initialRows.avatar}
//               // onChange={e =>
//               //   setinitialRows({ ...initialRows, avatar: e.target.value })
//               // }
//             />
//             <TextField
//               margin='dense'
//               label='Jersey Number'
//               type='text'
//               fullWidth
//               // value={initialRows.avatar}
//               // onChange={e =>
//               //   setinitialRows({ ...initialRows, avatar: e.target.value })
//               // }
//             />
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleClose}>Cancel</Button>
//             <Button onClick={handleClose}>Save</Button>
//           </DialogActions>
//         </div>
//       </Dialog>
//     </GridToolbarContainer>
//   )
// }
