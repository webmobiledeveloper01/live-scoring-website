import { randomId } from '@mui/x-data-grid-generator'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export const initialRows = [
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
    fee: 'Loan'
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
    fee: 'Raise'
  }
]

export const columns = [
  {
    field: 'date',
    headerName: 'Date',
    editable: false,
    type: 'Date',
    width: '100'
  },
  {
    field: 'team',
    headerName: 'Team',
    editable: false,
    minWidth: 180,
    flex: 1,
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
    field: 'player',
    headerName: 'Player',
    type: 'text',
    align: 'left',
    headerAlign: 'left',
    editable: false,
    minWidth: 150,
    flex: 1
  },
  {
    field: 'period',
    headerName: 'From / To',
    minWidth: 220,
    flex: 1,
    editable: false,
    renderCell: params => {
      return (
        <div className='d-flex align-center'>
          {params.row.period.type == 'from' ? (
            <ArrowBackIcon sx={{ color: 'green' }} />
          ) : (
            <ArrowForwardIcon sx={{ color: 'red' }} />
          )}
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
    field: 'fee',
    headerName: 'Fee',
    type: 'text',
    align: 'left',
    headerAlign: 'left',
    editable: false
  }
]
