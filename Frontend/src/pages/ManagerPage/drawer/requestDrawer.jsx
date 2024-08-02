import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import Avatar from '@mui/material/Avatar'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'
import FolderIcon from '@mui/icons-material/Folder'
import Typography from '@mui/material/Typography'
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  Main,
  DrawerHeader
} from '../../../styled'

import { requestPlayerClose } from '../../../redux/actions'

export default function SwipeableTemporaryDrawer () {
  const dispatch = useDispatch()
  const open = useSelector(state => state.requestplayer.open)
  const [state, setState] = React.useState(false)
  React.useEffect(() => {
    setState(open)
  }, [open])

  const toggleDrawer = open => event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }
    setState(open)
    dispatch(requestPlayerClose())
  }

  const list = () => (
    <Box
      sx={{
        width: '25vw !important',
        minWidth: '250px',
        backgroundColor: '#061727',
        padding: '20px'
      }}
      role='presentation'
    >
      <div className='d-flex j-between'>
        <Typography variant='subtitle1' gutterBottom>
          REQUEST NEW PALYER
        </Typography>
        <CloseIcon onClick={toggleDrawer(false)} />
      </div>
      <Search sx={{ borderRadius: 25, width: '100% !important' }}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder='Search Player'
          inputProps={{ 'aria-label': 'search' }}
          value={''}
        />
      </Search>
      <List
        sx={{
          '& .MuiListItem-root': {
            backgroundColor: '#040E17',
            borderRadius: '6px'
          }
        }}
      >
        <ListItem
          secondaryAction={
            <IconButton edge='end' aria-label='delete'>
              <CancelOutlinedIcon color='error' />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuKmb6FxjzK60QL-sZG-Ib5BG9B1UVmyoAkw&s'>
              <FolderIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary='Mahamed Salah'
            secondary={'Forward(Liverpool)'}
          />
          <ListItemText primary='AGE' secondary={'31'} />
        </ListItem>
      </List>
      <div className='d-flex j-end'>
        <button className='outline-btn'>Cancel</button>
        <button className='pull-btn'>Request Player</button>
      </div>
    </Box>
  )

  return (
    <div>
      <React.Fragment key={'right'}>
        <SwipeableDrawer
          anchor={'right'}
          open={state}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list()}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  )
}
