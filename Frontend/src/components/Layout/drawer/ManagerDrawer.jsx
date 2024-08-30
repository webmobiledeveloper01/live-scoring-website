import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined'
import { logout } from '../../../redux/actions/auth'

export default function ManagerDrawer () {
  const [open, setOpen] = React.useState(true)
  const menus = [
    { text: 'Dashboard', icon: <GroupOutlinedIcon />, url: '/dashboard' },
    { text: 'squad', icon: <PersonOutlinedIcon />, url: '/squad' },
    { text: 'Tournaments', icon: <GroupOutlinedIcon />, url: '/tournaments' },
    {
      text: 'Manage Team Players',
      icon: <PersonOutlinedIcon />,
      url: '/offical-team'
    },
    { text: 'jersey', icon: <PersonOutlinedIcon />, url: '/jersey' },
    { text: 'match', icon: <PersonOutlinedIcon />, url: '/matchs' },
    {
      text: 'Player Transfer',

      icon: <PersonOutlinedIcon />,
      url: '/transfer-request'
    },
    {
      text: 'Official updates',
      icon: <PersonOutlinedIcon />,
      url: '/team-manager-request'
    }
    // { text: 'My Account', icon: <PersonOutlinedIcon />, url: '/account' }
  ]
  const menuSetting = [
    { text: 'settings', icon: <SettingsOutlinedIcon /> },
    { text: 'logout', icon: <ExitToAppOutlinedIcon /> }
  ]
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleAction = item => {
    if (item.text == 'logout') {
      localStorage.removeItem('user');
      localStorage.removeItem('menuIndex');
      dispatch(logout())
      navigate('/')
    } else {
      navigate('/manager-setting')
    }
  }
  const handleClick = url => {
    navigate(url)
  }
  return (
    <>
      <List>
        {menus.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            onClick={() => handleClick(item.url)}
          >
            <ListItemButton
              sx={{
                margin: '2px',
                padding: '5px',
                '& .MuiListItemIcon-root': { minWidth: 35 }
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {menuSetting.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            onClick={() => handleAction(item)}
          >
            <ListItemButton
              sx={{
                margin: '2px',
                padding: '5px',
                '& .MuiListItemIcon-root': { minWidth: 35 }
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  )
}
