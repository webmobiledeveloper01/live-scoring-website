import * as React from 'react'
import { useDispatch } from 'react-redux'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import SportsSoccerOutlinedIcon from '@mui/icons-material/SportsSoccerOutlined'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'
import { selectSidebarItem } from '../../../redux/actions/sidebar'
import { Link, useNavigate } from 'react-router-dom'

export default function UserDrawer () {
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(true)
  const navigate = useNavigate()
  const handleSelect = function (data) {
    navigate('/')
    dispatch(selectSidebarItem(data))
  }
  const competitionMenus = [
    {
      type: 'competition',
      text: 'Premier League',
      subtext: 'England',
      icon: 'https://static.livescore.com/i2/fh/england.jpg'
    },
    {
      type: 'competition',
      text: 'Champions League',
      subtext: 'England',
      icon: 'https://static.livescore.com/i2/fh/champions-league.jpg'
    },
    {
      type: 'competition',
      text: 'Laliga',
      subtext: 'Spain',
      icon: 'https://static.livescore.com/i2/fh/spain.jpg'
    },
    {
      type: 'competition',
      text: 'Sarie A',
      subtext: 'Italy',
      icon: 'https://static.livescore.com/i2/fh/italy.jpg'
    },
    {
      type: 'competition',
      text: 'Bundesliga',
      subtext: 'Germany',
      icon: 'https://static.livescore.com/i2/fh/germany.jpg'
    }
  ]
  const teamMenus = [
    {
      type: 'team',
      text: 'Liverpool',
      subtext: 'England',
      icon: 'https://lsm-static-prod.livescore.com/medium/enet/8650.png'
    },
    {
      type: 'team',
      text: 'Arsenal',
      subtext: 'England',
      icon: 'https://lsm-static-prod.livescore.com/medium/enet/9825.png'
    },
    {
      type: 'team',
      text: 'Real Madrid',
      subtext: 'Spain',
      icon: 'https://lsm-static-prod.livescore.com/medium/enet/8633.png'
    }
  ]
  const regionMenus = [
    { text: 'England', icon: 'https://static.livescore.com/i2/fh/england.jpg' },
    { text: 'Spain', icon: 'https://static.livescore.com/i2/fh/spain.jpg' },
    { text: 'Italy', icon: 'https://static.livescore.com/i2/fh/italy.jpg' },
    { text: 'Germany', icon: 'https://static.livescore.com/i2/fh/germany.jpg' }
  ]

  return (
    <>
      {/* This part is team nmenu title */}

      <ListItemButton
        sx={{
          margin: '1px 5px',
          padding: 0,
          '& .MuiListItemIcon-root': { minWidth: 35 }
        }}
      >
        <ListItemIcon>
          <GroupsOutlinedIcon sx={{ color: 'var(--main-color)' }} />
        </ListItemIcon>
        <ListItemText primary='MY TEAMS' />
        <ArrowForwardIosIcon sx={{ color: 'grey' }} fontSize='small' />
      </ListItemButton>
      <Divider sx={{ borderWidth: '1px' }} />

      {/* This part is team menu */}

      <List>
        {teamMenus.map((item, index) => (
          <ListItem
            disablePadding
            key={index}
            onClick={() => handleSelect(item, index)}
          >
            <ListItemButton
              sx={{
                margin: '1px 5px',
                '& .MuiListItemIcon-root': { minWidth: 35 }
              }}
            >
              <ListItemIcon>
                <img src={item.icon} width={20} />
              </ListItemIcon>
              <ListItemText primary={item.text} secondary={item.subtext} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <ListItemButton
        sx={{
          margin: '1px 5px',
          padding: 0,
          '& .MuiListItemIcon-root': { minWidth: 35 }
        }}
      >
        <ListItemIcon>
          <SportsSoccerOutlinedIcon sx={{ color: 'var(--main-color)' }} />
        </ListItemIcon>
        <ListItemText primary='COMPETITIONS' />
        <ArrowForwardIosIcon sx={{ color: 'grey' }} fontSize='small' />
      </ListItemButton>
      <Divider sx={{ borderWidth: '1px' }} />

      {/* This part is competition menu */}

      <List>
        {competitionMenus.map((item, index) => (
          <ListItem
            disablePadding
            key={index}
            onClick={() => handleSelect(item, index)}
          >
            <ListItemButton
              sx={{
                margin: '1px 5px',
                '& .MuiListItemIcon-root': { minWidth: 35 }
              }}
            >
              <ListItemIcon>
                <img src={item.icon} width={20} />
              </ListItemIcon>
              <ListItemText primary={item.text} secondary={item.subtext} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* This part is regions menu title */}
      <ListItemButton
        sx={{
          margin: '1px 5px',
          padding: 0,
          '& .MuiListItemIcon-root': { minWidth: 35 }
        }}
      >
        <ListItemIcon>
          <LanguageOutlinedIcon sx={{ color: 'var(--main-color)' }} />
        </ListItemIcon>
        <ListItemText primary='REGIONS' />
        <ArrowForwardIosIcon sx={{ color: 'grey' }} fontSize='small' />
      </ListItemButton>
      <Divider sx={{ borderWidth: '1px' }} />

      <List>
        {regionMenus.map((item, index) => (
          <ListItem disablePadding key={index}>
            <ListItemButton
              sx={{
                margin: '1px 5px',
                '& .MuiListItemIcon-root': { minWidth: 35 }
              }}
            >
              <ListItemIcon>
                <img src={item.icon} width={20} />
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding alignItems='center'>
          <ListItemText
            primary={'Show more'}
            sx={{
              flex: 'none',
              '& *': { color: 'var(--main-color) !important' }
            }}
          />
          <ArrowForwardIosIcon sx={{ color: 'grey' }} fontSize='small' />
        </ListItem>
      </List>
    </>
  )
}
