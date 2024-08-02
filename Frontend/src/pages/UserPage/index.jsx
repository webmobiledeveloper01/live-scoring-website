import React from 'react'
import { useSelector } from 'react-redux'
import { Main, DrawerHeader } from '../../styled'
import Overview from './competitions/Overview'
import Matches from './competitions/Matches'
import Standing from './competitions/Standing'
import TeamOverview from './teams/Overview'
import TeamMatches from './teams/Matches'
import TeamStanding from './teams/Standing'
import Squad from './teams/Squad'
import Transfer from './teams/Transfer'
import clsx from 'clsx'
import List from '@mui/material/List'
import CustomGauge from '../../components/CustomGauge'
import CustomMultiGauge from '../../components/CustomMultiGauge'
import CustomBarChart from '../../components/CustomBarChart'
import AdminDrawer from '../../components/Layout/drawer/AdminDrawer'
import { useNavigate } from 'react-router-dom'
function UserPage () {
  const [select, setSelect] = React.useState(0)
  const [renderPage, setRenderPage] = React.useState(<Overview />)
  const open = useSelector(state => state.drawer.open)
  const teamInfo = useSelector(state => state.sidebar)
  const menuLists =
    teamInfo.type != 'team'
      ? ['overview', 'matches', 'standing']
      : ['overview', 'matches', 'standing', 'transfers', 'squad']

  React.useEffect(() => {
    handleMenu(select)
  }, [teamInfo])

  const navigate = useNavigate()

  const handleMenu = (index, text) => {
    navigate('/')
    setSelect(index)
    switch (index) {
      case 0:
        teamInfo.type != 'team'
          ? setRenderPage(<Overview />)
          : setRenderPage(<TeamOverview />)
        break
      case 1:
        teamInfo.type != 'team'
          ? setRenderPage(<Matches />)
          : setRenderPage(<TeamMatches />)
        break
      case 2:
        teamInfo.type != 'team'
          ? setRenderPage(<Standing />)
          : setRenderPage(<TeamStanding />)
        break
      case 3:
        teamInfo.type == 'team' ? setRenderPage(<Transfer />) : handleMenu(0)
        break
      case 4:
        teamInfo.type == 'team' ? setRenderPage(<Squad />) : handleMenu(0)
        break
      default:
        break
    }
  }

  const { authentification, role } = useSelector(state => state.auth)

  return (
    <Main open={open}>
      <DrawerHeader />

      {/* {authentification && role != 'admin' && <AdminDrawer />} */}
      <div className='d-flex user-page-container'>
        <div style={{ width: teamInfo.type == 'team' ? '75%' : '100%' }}>
          <div className='main-head d-flex flex-column'>
            <div className='main-head-intro d-flex j-between align-center'>
              <div className='main-head--logo d-flex align-center j-start'>
                <img src={teamInfo.icon} alt={teamInfo.text + ' flag'} />
                <div className='main-head--info d-flex flex-column'>
                  <h2 className='main-head--team'>{teamInfo.text}</h2>
                  <h5 className='main-head--country text-secondary'>
                    {teamInfo.subtext}
                  </h5>
                </div>
              </div>
            </div>
            <ul className='nav main-navbar flex gap-8'>
              {menuLists.map((item, index) => (
                <li className='nav-item' key={index}>
                  <a
                    className={clsx('nav-link', index == select && 'active')}
                    onClick={() => handleMenu(index, item)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='main-body'>{renderPage}</div>
        </div>
        {teamInfo.type == 'team' && (
          <div className='main-body team-chart-lists '>
            <List
              subheader='Winning Percentage'
              sx={{
                backgroundColor: '#041421',
                borderRadius: '8px',
                margin: '20px 0',
                padding: '10px'
              }}
            >
              <CustomGauge value={75} />
            </List>
            <List
              subheader='Match History'
              sx={{
                backgroundColor: '#041421',
                borderRadius: '8px',
                padding: '10px',
                margin: '20px 0'
              }}
            >
              <CustomBarChart value={75} />
            </List>
            <List
              subheader='Team Performance'
              sx={{
                backgroundColor: '#041421',
                borderRadius: '8px',
                margin: '20px 0',
                padding: '10px'
              }}
            >
              <CustomMultiGauge />
            </List>
          </div>
        )}
      </div>
    </Main>
  )
}

export default UserPage
