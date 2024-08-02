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
    team1: 'Arsenal',
    icon1: 'https://lsm-static-prod.livescore.com/medium/enet/9825.png',
    team2: 'Real Madrid',
    icon2: 'https://lsm-static-prod.livescore.com/medium/enet/8633.png',
    stadium: 'jacob jones',
    offical: 'view',
    date: '01/01/2024 09:00'
  }
]
export const columns = [
  {
    field: 'date',
    headerName: 'Date',
    type: 'Date',
    minWidth: 140,
    flex: 1,
    editable: true,
    renderCell: params => {
      return (
        <>
          <p style={{ height: '8px' }}>{params.value.split(' ')[0]}</p>
          <p style={{ height: '8px' }}>{params.value.split(' ')[1]}</p>
        </>
      )
    }
  },
  {
    field: 'team',
    headerName: 'TEAM',
    width: 220,
    editable: false,
    renderCell: params => {
      return (
        <div className='d-flex flex-column'>
          <div className='d-flex align-center' style={{ height: '40px' }}>
            <img
              src={params.row.icon1}
              style={{ margin: '10px 3px', width: '25px', height: '25px' }}
            />
            <span>{params.row.team1}</span>
          </div>
          <div className='d-flex align-center' style={{ height: '40px' }}>
            <img
              src={params.row.icon2}
              style={{ margin: '10px 3px', width: '25px', height: '25px' }}
            />
            <span>{params.row.team2}</span>
          </div>
        </div>
      )
    }
  },
  {
    field: 'stadium',
    headerName: 'STADIUM',
    type: 'text',
    width: 180,
    align: 'left',
    headerAlign: 'left',
    editable: true
  },
  {
    field: 'offical',
    headerName: 'OFFICAL',
    minWidth: 150,
    flex: 1,
    editable: true,
    renderCell: params => {
      return <font color='var(--main-color)'>{params.value}</font>
    }
  }
]
