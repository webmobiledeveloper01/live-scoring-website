import * as React from 'react'
import Box from '@mui/material/Box'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/DeleteOutlined'
import SaveIcon from '@mui/icons-material/Save'
import CancelIcon from '@mui/icons-material/Close'
import {
  DataGrid,
  GridRowEditStopReasons,
  GridRowModes,
  GridActionsCellItem
} from '@mui/x-data-grid'

export default function CustomEditTable ({
  customToolbar,
  columns,
  data,
  actionMode,
  option,
  showActions = true // Add a new prop with a default value
}) {
  const [rows, setRows] = React.useState(data)
  const [rowModesModel, setRowModesModel] = React.useState({})

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true
    }
  }

  const handleEditClick = id => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } })
  }
  const handleSaveClick = id => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } })
  }

  const handleDeleteClick = id => () => {
    setRows(rows.filter(row => row.id !== id))
  }

  const handleCancelClick = id => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true }
    })

    const editedRow = rows.find(row => row.id === id)
    if (editedRow.isNew) {
      setRows(rows.filter(row => row.id !== id))
    }
  }

  const processRowUpdate = newRow => {
    const updatedRow = { ...newRow, isNew: false }
    setRows(rows.map(row => (row.id === newRow.id ? updatedRow : row)))
    return updatedRow
  }

  const handleRowModesModelChange = newRowModesModel => {
    setRowModesModel(newRowModesModel)
  }

  const addColumns = {
    field: 'actions',
    type: 'actions',
    headerName: 'Actions',
    width: 100,
    cellClassName: 'actions',
    getActions: ({ id }) => {
      const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit

      if (isInEditMode) {
        return [
          <GridActionsCellItem
            icon={<SaveIcon />}
            label='Save'
            sx={{
              color: 'primary.main'
            }}
            onClick={handleSaveClick(id)}
          />,
          <GridActionsCellItem
            icon={<CancelIcon />}
            label='Cancel'
            className='textPrimary'
            onClick={handleCancelClick(id)}
            color='inherit'
          />
        ]
      }

      return [
        <GridActionsCellItem
          icon={<EditIcon />}
          label='Edit'
          className='textPrimary'
          onClick={handleEditClick(id)}
          color='inherit'
        />,
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label='Delete'
          onClick={handleDeleteClick(id)}
          color='inherit'
        />
      ]
    }
  }

  return (
    <Box
      sx={{
        height: '100%',
        width: '100%'
      }}
      //       className='bg-[#061727]'
    >
      <DataGrid
        //         className='bg-[#061727]'
        rows={rows}
        columns={showActions ? [...columns, addColumns] : columns} // Conditionally add action columns
        //         editMode='row'
        //         {...option}
        //         rowModesModel={rowModesModel}
        //         onRowModesModelChange={handleRowModesModelChange}
        //         onRowEditStop={handleRowEditStop}
        //         processRowUpdate={processRowUpdate}
        //         slots={{
        //           toolbar: customToolbar
        //         }}
        //         slotProps={{
        //           toolbar: { setRows, setRowModesModel }
        //         }}
        sx={{
          borderTop: 'none',
          '--DataGrid-rowBorderColor': 'transparent',
          border: 'none',
          '& .MuiDataGrid-cell': {
            fontSize: '12px',
            color: '#bcbfbf'
          },
          '& .MuiDataGrid-cell.MuiDataGrid-cell--editing:focus-within': {
            outline: 'none',
            border: 'solid #2b4561 1px'
          },
          '& .MuiDataGrid-row': {
            borderRadius: 0,
            margin: '5px 0',
            backgroundColor: '#061727',
            '--rowBorderColor': 'none'
          },
          '& .MuiDataGrid-col': {
            borderRadius: 0,
            margin: '5px 0',
            backgroundColor: '#061727',
            '--rowBorderColor': 'none'
          },
          '& .MuiDataGrid-row.Mui-selected': {
            backgroundColor: '#0F2A3F'
          },
          '& .MuiDataGrid-row.Mui-selected:hover': {
            backgroundColor: '#0F2A3F'
          },
          '& .MuiDataGrid-cell:focus': {
            border: 'solid #2b4561 1px',
            outline: 'none'
          }
        }}
      />
    </Box>
  )
}
