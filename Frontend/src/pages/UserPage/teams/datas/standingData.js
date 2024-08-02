import { randomUserName } from '@mui/x-data-grid-generator'

export const initialRows = [
  {
    id: 1,
    team: randomUserName(),
    avatar: 'https://lsm-static-prod.livescore.com/medium/enet/9825.png',
    P: '20',
    W: '23',
    D: '23',
    L: '28',
    F: '54',
    A: '3',
    GO: '34',
    PTS: '23'
  },
  {
    id: 2,
    team: randomUserName(),
    avatar: 'https://lsm-static-prod.livescore.com/medium/enet/9825.png',
    P: '20',
    W: '23',
    D: '23',
    L: '28',
    F: '54',
    A: '3',
    GO: '34',
    PTS: '23'
  },
  {
    id: 3,
    team: randomUserName(),
    avatar: 'https://lsm-static-prod.livescore.com/medium/enet/9825.png',
    P: '20',
    W: '23',
    D: '23',
    L: '28',
    F: '54',
    A: '3',
    GO: '34',
    PTS: '23'
  },
  {
    id: 4,
    team: randomUserName(),
    avatar: 'https://lsm-static-prod.livescore.com/medium/enet/9825.png',
    P: '20',
    W: '23',
    D: '23',
    L: '28',
    F: '54',
    A: '3',
    GO: '34',
    PTS: '23'
  },
  {
    id: 5,
    team: randomUserName(),
    avatar: 'https://lsm-static-prod.livescore.com/medium/enet/9825.png',
    P: '20',
    W: '23',
    D: '23',
    L: '28',
    F: '54',
    A: '3',
    GO: '34',
    PTS: '23'
  },
  {
    id: 6,
    team: randomUserName(),
    avatar: 'https://lsm-static-prod.livescore.com/medium/enet/9825.png',
    P: '20',
    W: '23',
    D: '23',
    L: '28',
    F: '54',
    A: '3',
    GO: '34',
    PTS: '23'
  },
  {
    id: 7,
    team: randomUserName(),
    avatar: 'https://lsm-static-prod.livescore.com/medium/enet/9825.png',
    P: '20',
    W: '23',
    D: '23',
    L: '28',
    F: '54',
    A: '3',
    GO: '34',
    PTS: '23'
  },
  {
    id: 8,
    team: randomUserName(),
    avatar: 'https://lsm-static-prod.livescore.com/medium/enet/9825.png',
    P: '20',
    W: '23',
    D: '23',
    L: '28',
    F: '54',
    A: '3',
    GO: '34',
    PTS: '23'
  },
  {
    id: 9,
    team: randomUserName(),
    avatar: 'https://lsm-static-prod.livescore.com/medium/enet/9825.png',
    P: '20',
    W: '23',
    D: '23',
    L: '28',
    F: '54',
    A: '3',
    GO: '34',
    PTS: '23'
  }
]

export const columns = [
  {
    field: 'id',
    headerName: '#',
    width: 90,
    editable: false,
    renderCell: params => {
      if (params.row.id < 4)
        return <button className='btn btn-success'>{params.row.id}</button>
      else if (params.row.id >= 4 && params.row.id < 6)
        return <button className='btn btn-warning'>{params.row.id}</button>
      else return <span>{params.row.id}</span>
    }
  },
  {
    field: 'team',
    headerName: 'TEAM',
    width: 450,
    editable: false,
    renderCell: params => {
      return (
        <div className='d-flex'>
          <img
            src={params.row.avatar}
            style={{ margin: '10px 3px', width: '30px', height: '30px' }}
          />
          <span>{params.row.team}</span>
        </div>
      )
    }
  },
  {
    field: 'P',
    headerName: 'P',
    align: 'left',
    headerAlign: 'left',
    editable: false,
    width: 30
  },
  {
    field: 'W',
    headerName: 'W',
    align: 'left',
    headerAlign: 'left',
    editable: false,
    width: 30
  },
  {
    field: 'D',
    headerName: 'D',
    align: 'left',
    headerAlign: 'left',
    editable: false,
    width: 30
  },
  {
    field: 'L',
    headerName: 'L',
    align: 'left',
    headerAlign: 'left',
    editable: false,
    width: 30
  },
  {
    field: 'F',
    headerName: 'F',
    align: 'left',
    headerAlign: 'left',
    editable: false,
    width: 30
  },
  {
    field: 'A',
    headerName: 'A',
    align: 'left',
    headerAlign: 'left',
    editable: false,
    width: 30
  },
  {
    field: 'GO',
    headerName: 'GO',
    align: 'left',
    headerAlign: 'left',
    editable: false,
    width: 30
  },
  {
    field: 'PTS',
    headerName: 'PTS',
    align: 'left',
    headerAlign: 'left',
    editable: false,
    width: 30
  }
]
