import QueryBuilderIcon from '@mui/icons-material/QueryBuilder'
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer'
import RuleCard from '../../../../components/RuleCard'

export const initialRows = [
  {
    id: 1,
    player: 'Alisson',
    position: 'Goal keeper',
    C: "76'",
    F: '1',
    A: '1',
    O: '0',
    W: '0'
  },
  {
    id: 2,
    player: 'Bradley Conor',
    position: 'Goal keeper',
    C: "76'",
    F: '1',
    A: '1',
    O: '0',
    W: '0'
  }
]
export const columns = [
  {
    field: 'id',
    headerName: '#',
    width: 50,
    editable: false
  },
  {
    field: 'player',
    headerName: 'PLAYER',
    minWidth: 200,
    flex: 1,
    editable: false
  },
  {
    field: 'position',
    headerName: 'POSITION',
    minWidth: 200,
    flex: 1,
    editable: false
  },
  {
    field: 'C',
    headerName: <QueryBuilderIcon />,
    align: 'left',
    headerAlign: 'left',
    editable: false,
    width: 30
  },
  {
    field: 'F',
    headerName: <SportsSoccerIcon sx={{ color: 'var(--main-color)' }} />,
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
    field: 'O',
    headerName: <RuleCard rule={'out'} />,
    align: 'left',
    headerAlign: 'left',
    editable: false,
    width: 30
  },
  {
    field: 'W',
    headerName: <RuleCard rule={'warn'} />,
    align: 'left',
    headerAlign: 'left',
    editable: false,
    width: 30
  }
]
