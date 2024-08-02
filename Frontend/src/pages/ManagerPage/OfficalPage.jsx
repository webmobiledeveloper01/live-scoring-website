import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined'
import SearchIcon from '@mui/icons-material/Search'
import { DataGrid, GridToolbarContainer, GridRowModes } from '@mui/x-data-grid'
import { randomTraderName, randomId } from '@mui/x-data-grid-generator'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import CustomEditTable from '../../components/CustomEditTable'
import { Search } from '@mui/icons-material'

import CustomTab from '../../components/CustomTabs'

import {
  contentMenu,
  columns,
  EditToolbar,
  initialRows
} from './datas/officalData'
import { Main } from '../../styled'
import { useSelector } from 'react-redux'
// import { Search, SearchIconWrapper, StyledInputBase } from '../../../styled'

// const initialRows = [
//   {
//     id: randomId(),
//     name: randomTraderName(),
//     avatar: '/images/avatar/player.jpg',
//     pos: 'Coach'
//   },
//   {
//     id: randomId(),
//     name: randomTraderName(),
//     avatar: '/images/avatar/player.jpg',
//     pos: 'Coach'
//   },
//   {
//     id: randomId(),
//     name: randomTraderName(),
//     avatar: '/images/avatar/player.jpg',
//     pos: 'Coach'
//   },
//   {
//     id: randomId(),
//     name: randomTraderName(),
//     avatar: '/images/avatar/player.jpg',
//     pos: 'Coach'
//   },
//   {
//     id: randomId(),
//     name: randomTraderName(),
//     avatar: '/images/avatar/player.jpg',
//     pos: 'Coach'
//   },
//   {
//     id: randomId(),
//     name: randomTraderName(),
//     avatar: '/images/avatar/player.jpg',
//     pos: 'Coach'
//   },
//   {
//     id: randomId(),
//     name: randomTraderName(),
//     avatar: '/images/avatar/player.jpg',
//     pos: 'Coach'
//   }
// ]

// const columns = [
//   {
//     field: 'user',
//     headerName: 'Name',
//     width: 300,
//     editable: false,
//     renderCell: params => (
//       <div className='d-flex'>
//         <Avatar src={params.row.avatar} sx={{ marginRight: 3 }} />
//         <span>{params.row.name}</span>
//       </div>
//     )
//   },
//   {
//     field: 'pos',
//     headerName: 'Position',
//     type: 'text',
//     width: 400,
//     align: 'left',
//     headerAlign: 'left',
//     editable: true
//   }
// ]

// const EditToolbar = ({ setRows, setRowModesModel }) => {
//   const [search, setSearched] = useState('')

//   const requestSearch = e => {
//     const searchedVal = e.target.value
//     setSearched(searchedVal)
//     const filteredRows = initialRows.filter(row =>
//       row.name.toLowerCase().includes(searchedVal.toLowerCase())
//     )
//     setRows(filteredRows)
//   }

//   const cancelSearch = () => {
//     setSearched('')
//     setRows(initialRows)
//   }

//   const handleClick = () => {
//     const id = randomId()
//     setRows(oldRows => [
//       ...oldRows,
//       { id, name: '', pos: '', avatar: '', isNew: true }
//     ])
//     setRowModesModel(oldModel => ({
//       ...oldModel,
//       [id]: { mode: GridRowModes.Edit, fieldToFocus: 'pos' }
//     }))
//   }

//   // return (
//   //   <GridToolbarContainer
//   //     sx={{ display: 'flex', justifyContent: 'space-between', margin: '8px 0' }}
//   //   >
//   //     <Search sx={{ borderRadius: 25 }}>
//   //       <SearchIconWrapper>
//   //         <SearchIcon />
//   //       </SearchIconWrapper>
//   //       <StyledInputBase
//   //         placeholder='Search…'
//   //         inputProps={{ 'aria-label': 'search' }}
//   //         value={search}
//   //         onChange={requestSearch}
//   //       />
//   //     </Search>
//   //     <Button variant='contained' color='primary' onClick={handleClick}>
//   //       <PersonAddAltOutlinedIcon />
//   //       &nbsp;&nbsp;Add New Official
//   //     </Button>
//   //   </GridToolbarContainer>
//   // )
// }

const OfficalPage = () => {
  const [rows, setRows] = useState(initialRows)
  const [rowModesModel, setRowModesModel] = useState({})
  const [openw, setOpen] = useState(false)
  const [currentRow, setCurrentRow] = useState({
    id: '',
    name: '',
    pos: '',
    avatar: ''
  })

  const handleOpen = row => {
    setCurrentRow(row)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setCurrentRow({ id: '', name: '', pos: '', avatar: '' })
  }

  const handleSave = () => {
    setRows(prevRows =>
      prevRows.map(row => (row.id === currentRow.id ? currentRow : row))
    )
    handleClose()
  }

  const handleEditClick = id => {
    const row = rows.find(r => r.id === id)
    handleOpen(row)
  }

  const open = useSelector(state => state.drawer.open)

  return (
    <>
      <Main open={open}>
        <div className='max-w-7xl mx-auto mt-40 p20 max-md:p-20  max-sm:p-5 '>
          {/* <DataGrid
          rows={rows}
          columns={columns}
          components={{
            Toolbar: props => (
              <EditToolbar
                {...props}
                setRows={setRows}
                setRowModesModel={setRowModesModel}
              />
            )
          }}
          onCellDoubleClick={params => handleEditClick(params.id)}
        />
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Edit Official</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin='dense'
              label='Name'
              type='text'
              fullWidth
              value={currentRow.name}
              onChange={e =>
                setCurrentRow({ ...currentRow, name: e.target.value })
              }
            />
            <TextField
              margin='dense'
              label='Position'
              type='text'
              fullWidth
              value={currentRow.pos}
              onChange={e =>
                setCurrentRow({ ...currentRow, pos: e.target.value })
              }
            />
            <TextField
              margin='dense'
              label='Avatar URL'
              type='text'
              fullWidth
              value={currentRow.avatar}
              onChange={e =>
                setCurrentRow({ ...currentRow, avatar: e.target.value })
              }
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSave}>Save</Button>
          </DialogActions>
        </Dialog> */}

          <div className='max-w-7xl mx-auto mt-40 max-md:mt-0'>
            {/* <CustomTab borderShow={true} tabData={contentMenu} /> */}
            <CustomEditTable
              customToolbar={EditToolbar}
              columns={columns}
              data={initialRows}
            />
          </div>
        </div>
      </Main>
    </>
  )
}

export default OfficalPage
