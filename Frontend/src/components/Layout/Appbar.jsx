import * as React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import IconButton from '@mui/material/IconButton'
import Fab from '@mui/material/Fab'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Drawer from '@mui/material/Drawer'
import Tooltip from '@mui/material/Tooltip'
import { Avatar, Divider, List, Typography } from '@mui/material'

import MoreIcon from '@mui/icons-material/MoreVert'
import TuneIcon from '@mui/icons-material/Tune'
import MenuIcon from '@mui/icons-material/Menu'
import LoginIcon from '@mui/icons-material/Login'
import SearchIcon from '@mui/icons-material/Search'
import ScoreboardOutlinedIcon from '@mui/icons-material/ScoreboardOutlined'
import CollectionsBookmarkOutlinedIcon from '@mui/icons-material/CollectionsBookmarkOutlined'
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined'

import UserDrawer from './drawer/UserDrawer'
import AdminDrawer from './drawer/AdminDrawer'
import ManagerDrawer from './drawer/ManagerDrawer'
import SiteLogo from './SiteLogo'
import CustomTabs from '../CustomTabs'
import CustomModal from '../CustomModal'

import { openSignModal, handleDrawer } from '../../redux/actions'
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  AppBar,
  TopToolbar,
  drawerWidth,
  Logo
} from '../../styled'

export default function PersistentDrawerRight () {
  const [menuIndex, setMenuIndex] = React.useState(0)
  const pathname = useLocation().pathname
  const [drawer, setDrawer] = React.useState(<UserDrawer />)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [anchorElSetting, setAnchorElSetting] = React.useState(null)
  const dispatch = useDispatch()
  const { authentification, role } = useSelector(state => state.auth)
  const open = useSelector(state => state.drawer.open)

  const topMenu = [
    { text: 'TODAY SCORES', icon: <ScoreboardOutlinedIcon />, url: '/' },
    {
      text: 'FAVORITES',
      icon: <CollectionsBookmarkOutlinedIcon />,
      url: '/favourites/matches'
    },
    { text: 'NEWS', icon: <NewspaperOutlinedIcon />, url: '/news' }
  ]

  const mobileMenu = ['sign in', 'setting']
  const settings = ['setting']

  React.useEffect(() => {
    const [findValue] = topMenu.filter((item, index) => item.url == pathname)
    setMenuIndex(topMenu.indexOf(findValue))
  }, [pathname])
  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleMenuSetting = event => {
    setAnchorElSetting(event.currentTarget)
  }
  const handleMenuSettingClose = () => {
    setAnchorElSetting(null)
  }
  const handleMenuClose = () => {
    setAnchorEl(null)
  }
  const handleDrawerOpen = () => {
    dispatch(handleDrawer(true))
  }

  const handleModal = () => {
    dispatch(openSignModal(true))
  }
  // React.useEffect(() => {
  //   if (role == 'admin') {
  //     setDrawer(<AdminDrawer />)
  //   } else if (role == 'manager') {
  //     setDrawer(<ManagerDrawer />)
  //   } else if (role == 'common') {
  //     setDrawer(<UserDrawer />)
  //   }
  // }, [role])

  const navigate = useNavigate()

  return (
    <>
      <Box className='buaman' sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position='fixed' open={open}>
          <TopToolbar>
            <>
              <IconButton
                color='inherit'
                aria-label='open drawer'
                onClick={handleDrawerOpen}
                edge='start'
                sx={{ mr: 2, ...(open && { display: 'none' }) }}
              >
                <MenuIcon />
              </IconButton>
              {!open && (
                <Logo className='app-logo'>
                  <img src='/images/GFA_logo.svg' alt='' />
                  <div className='d-flex flex-column'>
                    <h5 className='text-main'>Golden</h5>
                    <small className='text-main'>FUTSAL ASSOCIATION</small>
                  </div>
                </Logo>
              )}
            </>

            {/* This part is top menu */}
            <button
              onClick={() => {
                navigate('/live')
              }}
              className='text-orange-500'
            >
              LIVE
            </button>
            <Box sx={{ flex: 1 }} />

            {!authentification && role !== 'manager' && (
              <CustomTabs
                sx={{ width: 'auto !important' }}
                tabData={topMenu}
                index={menuIndex}
              />
            )}
            {authentification && role !== 'admin' && (
              // <CustomTabs
              //   sx={{ width: 'auto !important' }}
              //   tabData={topMenu}
              //   index={menuIndex}
              // />
              <>{/* <h1>Hey admin</h1> */}</>
            )}
            <Box sx={{ flex: 1 }} />
            <Box
              sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
            >
              {/* <Fab
                size='small'
                aria-label='add'
                sx={{ margin: 1, backgroundColor: '#303D46' }}
              >
                <SearchIcon sx={{ color: '#738089' }} />
              </Fab> */}
              {!authentification && (
                <Fab
                  size={'small'}
                  onClick={handleModal}
                  variant='extended'
                  sx={{
                    padding: 2,
                    backgroundColor: '#303D46',
                    '&,& *': { color: '#738089' }
                  }}
                >
                  Sign In
                  <LoginIcon sx={{ ml: 1 }} />
                </Fab>
              )}
              {authentification && role !== 'common' && (
                <Avatar
                  size='large'
                  edge='end'
                  aria-label='account of current user'
                  // aria-controls={menuId}
                  aria-haspopup='true'
                  // onClick={handleProfileMenuOpen}
                  color='inherit'
                  src='https://lsm-static-prod.livescore.com/medium/enet/9825.png'
                ></Avatar>
              )}
              {/* <Fab
                size='small'
                aria-label='setting'
                sx={{ margin: 1, backgroundColor: '#303D46' }}
              >
                <TuneIcon
                  sx={{ color: '#738089' }}
                  onClick={handleMenuSetting}
                />
                <Menu
                  sx={{ mt: '45px' }}
                  id='menu-appbar-setting'
                  anchorEl={anchorElSetting}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  open={Boolean(anchorElSetting)}
                  onClose={handleMenuSettingClose}
                >
                  {settings.map(setting => (
                    <MenuItem key={setting} onClick={handleMenuSettingClose}>
                      <Typography textAlign='center'>{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Fab> */}
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              {/* <Box sx={{ flexGrow: 0 }}>
                <Tooltip title='Open settings'>
                  <IconButton onClick={handleMenu} sx={{ p: 0 }}>
                    <MoreIcon />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id='menu-appbar'
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  {mobileMenu.map(setting => (
                    <MenuItem key={setting} onClick={handleMenuClose}>
                      <Typography textAlign='center'>{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box> */}
            </Box>
          </TopToolbar>
        </AppBar>
        <CustomModal />
      </Box>

      {/* This part is Sidebar. */}
      <div className='flex'>
        <Drawer
          sx={{
            border: 'none',
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              padding: '3px 20px'
            },
            '& .MuiTypography-root,& .MuiListItemIcon-root': {
              color: '#A2B1BF'
            }
          }}
          variant='persistent'
          anchor='left'
          open={open}
        >
          <SiteLogo></SiteLogo>

          <Divider />

          {!authentification && role == 'common' && (
            <Search
              sx={{ borderRadius: 25, width: '100%', m: '30px 0 20px 0' }}
            >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder='Search'
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          )}

          {/* This is profile avatar */}
          {authentification && role != 'common' && (
            <List sx={{ textAlign: 'center' }}>
              <Avatar
                alt='Remy Sharp'
                src='/images/avatar/manager.jpg'
                sx={{ margin: 'auto', width: 90, height: 90, marginBottom: 1 }}
              />
              <h5>courtney Henry</h5>
              <Typography variant='subtitle1' gutterBottom>
                {authentification && role == 'manager'
                  ? 'Manager'
                  : 'Super Admin'}
              </Typography>
            </List>
          )}
          <div className='managerkk'>
            {authentification && role == 'admin' && <AdminDrawer />}
          </div>

          {/* This is switched other drawer. */}

          {!authentification && role == 'common' && (
            <>
              {/* <div className='fixed left-0 '> */}
              <UserDrawer />
              {/* <AdminDrawer /> */}
              {/* <ManagerDrawer /> */}
              {/* </div> */}
            </>
          )}

          <div className='managerkkkkkkkkkkkkkkkkkkk'>
            {authentification && role == 'manager' && <ManagerDrawer />}
          </div>
          <Divider />
        </Drawer>
      </div>
    </>
  )
}
