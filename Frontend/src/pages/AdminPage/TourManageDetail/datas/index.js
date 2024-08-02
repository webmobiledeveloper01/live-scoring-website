import clsx from 'clsx'
import { Avatar } from '@mui/material'
import { randomId, randomArrayItem } from '@mui/x-data-grid-generator'

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
    ofplayer: 19
  },
  {
    id: randomId(),
    team: 'Arsenal',
    avatar: 'https://lsm-static-prod.livescore.com/medium/enet/9825.png',
    manager: 'jacob jones',
    status: randomRole(),
    ofplayer: 19
  },
  {
    id: randomId(),
    team: 'Arsenal',
    avatar: 'https://lsm-static-prod.livescore.com/medium/enet/9825.png',
    manager: 'jacob jones',
    status: randomRole(),
    ofplayer: 19
  },
  {
    id: randomId(),
    team: 'Arsenal',
    avatar: 'https://lsm-static-prod.livescore.com/medium/enet/9825.png',
    manager: 'jacob jones',
    status: randomRole(),
    ofplayer: 19
  },
  {
    id: randomId(),
    team: 'Arsenal',
    avatar: 'https://lsm-static-prod.livescore.com/medium/enet/9825.png',
    manager: 'jacob jones',
    status: randomRole(),
    ofplayer: 19
  },
  {
    id: randomId(),
    team: 'Arsenal',
    avatar: 'https://lsm-static-prod.livescore.com/medium/enet/9825.png',
    manager: 'jacob jones',
    status: randomRole(),
    ofplayer: 19
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
    headerName: 'MANAGER',
    type: 'text',
    width: 180,
    align: 'left',
    headerAlign: 'left',
    editable: true
  },
  {
    field: 'status',
    headerName: 'STATUS',
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
    width: 180,
    editable: true
  }
]
