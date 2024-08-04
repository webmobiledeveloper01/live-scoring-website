import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Main, DrawerHeader } from '../../styled'
import { useNavigate } from 'react-router-dom'
import { 
  Box, 
  Typography, 
  Tab, 
  Tabs, 
  Select, 
  MenuItem, 
  List, 
  ListSubheader, 
  useMediaQuery, 
  useTheme 
} from '@mui/material'
import CustomGauge from '../../components/CustomGauge'
import CustomMultiGauge from '../../components/CustomMultiGauge'
import CustomBarChart from '../../components/CustomBarChart'
import Overview from './competitions/Overview'
import Matches from './competitions/Matches'
import Standing from './competitions/Standing'
import TeamOverview from './teams/Overview'
import TeamMatches from './teams/Matches'
import TeamStanding from './teams/Standing'
import Squad from './teams/Squad'
import Transfer from './teams/Transfer'

function UserPage() {
  const [select, setSelect] = useState(0)
  const [renderPage, setRenderPage] = useState(<Overview />)
  const open = useSelector(state => state.drawer.open)
  const teamInfo = useSelector(state => state.sidebar)
  const navigate = useNavigate()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const menuLists = teamInfo.type !== 'team'
    ? ['overview', 'matches', 'standing']
    : ['overview', 'matches', 'standing', 'transfers', 'squad']

  useEffect(() => {
    handleMenu(select)
  }, [teamInfo])

  const handleMenu = (index) => {
    navigate('/')
    setSelect(index)
    const pages = [
      teamInfo.type !== 'team' ? <Overview /> : <TeamOverview />,
      teamInfo.type !== 'team' ? <Matches /> : <TeamMatches />,
      teamInfo.type !== 'team' ? <Standing /> : <TeamStanding />,
      <Transfer />,
      <Squad />
    ]
    setRenderPage(pages[index] || pages[0])
  }

  return (
    <Main open={open}>
      <DrawerHeader />
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, p: 2 }}>
        <Box sx={{ flexGrow: 1, minWidth: 0, maxWidth: '100%' }}>
          <Box sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Box component="img" src={teamInfo.icon} alt={`${teamInfo.text} flag`} sx={{ maxWidth: 50, mr: 1 }} />
              <Box>
                <Typography variant="h4" component="h2">{teamInfo.text}</Typography>
                <Typography variant="subtitle1" color="text.secondary">{teamInfo.subtext}</Typography>
              </Box>
            </Box>
            {isMobile ? (
              <Select
                value={select}
                onChange={(e) => handleMenu(e.target.value)}
                fullWidth
              >
                {menuLists.map((item, index) => (
                  <MenuItem key={index} value={index}>{item}</MenuItem>
                ))}
              </Select>
            ) : (
              <Tabs value={select} onChange={(_, newValue) => handleMenu(newValue)}>
                {menuLists.map((item, index) => (
                  <Tab key={index} label={item} />
                ))}
              </Tabs>
            )}
          </Box>
          <Box>{renderPage}</Box>
        </Box>
        {teamInfo.type === 'team' && (
          <Box sx={{ flexShrink: 0, width: { xs: '100%', md: 300 } }}>
            <List
              subheader={<ListSubheader>Winning Percentage</ListSubheader>}
              sx={{ bgcolor: 'background.paper', borderRadius: 1, mb: 2 }}
            >
              <CustomGauge value={75} />
            </List>
            <List
              subheader={<ListSubheader>Match History</ListSubheader>}
              sx={{ bgcolor: 'background.paper', borderRadius: 1, mb: 2 }}
            >
              <CustomBarChart value={75} />
            </List>
            <List
              subheader={<ListSubheader>Team Performance</ListSubheader>}
              sx={{ bgcolor: 'background.paper', borderRadius: 1, mb: 2 }}
            >
              <CustomMultiGauge />
            </List>
          </Box>
        )}
      </Box>
    </Main>
  )
}

export default UserPage