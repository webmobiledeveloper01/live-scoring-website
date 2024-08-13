import CollectionsBookmarkOutlinedIcon from '@mui/icons-material/CollectionsBookmarkOutlined'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import LoginIcon from '@mui/icons-material/Login'
import MenuIcon from '@mui/icons-material/Menu'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined'
import ScoreboardOutlinedIcon from '@mui/icons-material/ScoreboardOutlined'
import SearchIcon from '@mui/icons-material/Search'
import { Avatar, Divider, List, Menu, MenuItem, Typography, useMediaQuery, useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Drawer from '@mui/material/Drawer'
import Fab from '@mui/material/Fab'
import IconButton from '@mui/material/IconButton'
import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { handleDrawer, openSignModal } from '../../redux/actions'
import { AppBar, drawerWidth, Logo, Search, SearchIconWrapper, StyledInputBase, TopToolbar } from '../../styled'
import CustomModal from '../CustomModal'
import CustomTabs from '../CustomTabs'
import AdminDrawer from './drawer/AdminDrawer'
import ManagerDrawer from './drawer/ManagerDrawer'
import UserDrawer from './drawer/UserDrawer'
import SiteLogo from './SiteLogo'

export default function PersistentDrawerRight () {
  const [menuIndex, setMenuIndex] = React.useState(0)
  const pathname = useLocation().pathname
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [moreAnchorEl, setMoreAnchorEl] = React.useState(null)
  const dispatch = useDispatch()
  const { name, authentification, role } = useSelector(state => state.auth)
  const open = useSelector(state => state.drawer.open)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const topMenu = [
    { text: 'TODAY SCORES', icon: <ScoreboardOutlinedIcon />, url: '/' },
    { text: 'FAVORITES', icon: <CollectionsBookmarkOutlinedIcon />, url: '/favourites/matches' },
    { text: 'NEWS', icon: <NewspaperOutlinedIcon />, url: '/news' }
  ]

  React.useEffect(() => {
    const [findValue] = topMenu.filter((item, index) => item.url == pathname)
    setMenuIndex(topMenu.indexOf(findValue))
  }, [pathname])

  const handleDrawerOpen = () => {
    dispatch(handleDrawer(true))
  }

  const handleModal = () => {
    dispatch(openSignModal(true))
  }

  const handleMoreClick = (event) => {
    setMoreAnchorEl(event.currentTarget)
  }

  const handleMoreClose = () => {
    setMoreAnchorEl(null)
  }

  const navigate = useNavigate()

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position='fixed' open={open} sx={{ 
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }), 
          ...(open && {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: `${drawerWidth}px`,
            transition: theme.transitions.create(['margin', 'width'], {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen,
            }),
          })
        }}>
          <TopToolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={handleDrawerOpen}
              edge='start'
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: isMobile ? 1 : 0 }}>
              {!open && (
                <Logo className='app-logo'>
                  <img src='/images/GFA_logo.svg' alt='' />
                  <div className='d-flex flex-column'>
                    <h5 className='text-main'>Golden</h5>
                    <small className='text-main'>FUTSAL ASSOCIATION</small>
                  </div>
                </Logo>
              )}
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                ml: 2,
              }}>
                <FiberManualRecordIcon sx={{ color: 'red', fontSize: 12, mr: 0.5 }} />
                <Typography variant='button' sx={{ color: 'red' }}>LIVE</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
              {!authentification && role !== 'manager' && (
                isMobile && !open ? (
                  <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    {topMenu.map((item, index) => (
                      <IconButton key={index} color="inherit" onClick={() => navigate(item.url)}>
                        {item.icon}
                      </IconButton>
                    ))}
                  </Box>
                ) : (
                  !isMobile && <CustomTabs sx={{ width: 'auto !important' }} tabData={topMenu} index={menuIndex} />
                )
              )}
            </Box>
            {isMobile && open && !authentification ? (
              <IconButton color="inherit" onClick={handleMoreClick}>
                <MoreVertIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {!authentification && (
                  <Fab
                    size={isMobile ? 'small' : 'medium'}
                    onClick={handleModal}
                    variant='extended'
                    sx={{
                      padding: isMobile ? 1 : 2,
                      backgroundColor: '#303D46',
                      '&,& *': { color: '#738089' }
                    }}
                  >
                    {isMobile ? <LoginIcon /> : 'Sign In'}
                    {!isMobile && <LoginIcon sx={{ ml: 1 }} />}
                  </Fab>
                )}
                {authentification && role !== 'common' && (
                  <Avatar
                    size='large'
                    edge='end'
                    aria-label='account of current user'
                    aria-haspopup='true'
                    color='inherit'
                    src='https://lsm-static-prod.livescore.com/medium/enet/9825.png'
                  />
                )}
              </Box>
            )}
          </TopToolbar>
        </AppBar>
        <Menu
          anchorEl={moreAnchorEl}
          open={Boolean(moreAnchorEl)}
          onClose={handleMoreClose}
        >
          {topMenu.map((item, index) => (
            <MenuItem key={index} onClick={() => { navigate(item.url); handleMoreClose(); }}>
              {item.icon}
              <Typography variant="body1" sx={{ ml: 1 }}>{item.text}</Typography>
            </MenuItem>
          ))}
          {!authentification && (
            <MenuItem onClick={() => { handleModal(); handleMoreClose(); }}>
              <LoginIcon />
              <Typography variant="body1" sx={{ ml: 1 }}>Sign In</Typography>
            </MenuItem>
          )}
        </Menu>
        <CustomModal />
      </Box>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
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
        <SiteLogo />
        <Divider />
        {!authentification && role === 'common' && (
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
        {authentification && role !== 'common' && (
          <List sx={{ textAlign: 'center' }}>
            <Avatar
              alt='Remy Sharp'
              src='/images/avatar/manager.jpg'
              sx={{ margin: 'auto', width: 90, height: 90, marginBottom: 1 }}
            />
            <h5>{name}</h5>
            <Typography variant='subtitle1' gutterBottom>
              {authentification && role === 'manager' ? 'Manager' : 'Super Admin'}
            </Typography>
          </List>
        )}
        {authentification && role === 'admin' && <AdminDrawer />}
        {authentification && role === 'manager' && <ManagerDrawer />}
        {(!authentification || (authentification && role === 'common')) && <UserDrawer />}
        <Divider />
      </Drawer>
    </>
  )
}