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

