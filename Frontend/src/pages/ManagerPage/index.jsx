import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Main, DrawerHeader } from '../../styled'
import RequestDrawer from './drawer/requestDrawer'
import OfficalPage from './OfficalPage'
import SquadPage from './SquadPage'
import JerseyPage from './JerseyPage'
import MatchPage from './MatchPage'
import TransferPage from './TransferPage'
import clsx from 'clsx'

import EditIcon from '@mui/icons-material/Edit'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import NotificationManager from '../AdminPage/NotificationManager'

function ManagerPage () {
  const menuLists = [
    'squad',
    'offical team',
    'jersey',
    'match',
    'Player Transfer',
    'Official updates'
  ]
  const [select, setSelect] = React.useState(0)
  const open = useSelector(state => state.drawer.open)
  const [renderPage, setRenderPage] = React.useState(<SquadPage />)

  const handleMenu = (index, text) => {
    setSelect(index)
    console.log(index)
    switch (index) {
      case 0:
        setRenderPage(<SquadPage />)
        break
      case 1:
        setRenderPage(<OfficalPage />)
        break
      case 2:
        setRenderPage(<JerseyPage />)
        break
      case 3:
        setRenderPage(<MatchPage />)
        break
      case 4:
        setRenderPage(<TransferPage />)
        break
      case 5:
        setRenderPage(<NotificationManager />)
        break
      default:
        break
    }
  }

  // ////////////////////////////////////
  const [isEditing, setIsEditing] = useState(false)
  const [teamName, setTeamName] = useState('Liverpool')
  const [country, setCountry] = useState('England')
  const [logoUrl, setLogoUrl] = useState(
    'https://lsm-static-prod.livescore.com/medium/enet/8650.png'
  )

  const handleEditClick = () => {
    setIsEditing(true)
  }

  const handleSaveClick = () => {
    setIsEditing(false)
    // Implement your save logic here, such as sending data to an API
  }

  const handleCancelClick = () => {
    setIsEditing(false)
    // Optionally reset the values to the previous state if needed
  }

  return (
    <Main open={open}>
      <RequestDrawer />
      <DrawerHeader />
      <div className='main-head d-flex flex-column'>
        <div className='main-head-intro d-flex j-between align-center'>
          <div className='main-head--logo d-flex align-center j-start'>
            <img src={logoUrl} alt='' />
            <div className='main-head--info d-flex flex-column'>
              {isEditing ? (
                <>
                  <TextField
                    value={teamName}
                    onChange={e => setTeamName(e.target.value)}
                    variant='standard'
                    margin='dense'
                  />
                  <TextField
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                    variant='standard'
                    margin='dense'
                  />
                </>
              ) : (
                <>
                  <h2 className='main-head--team'>{teamName}</h2>
                  <h5 className='main-head--country text-secondary'>
                    {country}
                  </h5>
                </>
              )}
            </div>
          </div>
          <div className='d-flex align-center'>
            {isEditing ? (
              <>
                <IconButton onClick={handleSaveClick}>
                  <CheckIcon />
                </IconButton>
                <IconButton onClick={handleCancelClick}>
                  <CloseIcon />
                </IconButton>
              </>
            ) : (
              <>
                <button className='main-head--action outline-btn'>
                  Change Logo
                </button>
                <IconButton onClick={handleEditClick}>
                  <EditIcon />
                </IconButton>
              </>
            )}
          </div>
        </div>
        <ul className='nav main-navbar flex gap-2'>
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
    </Main>
  )
}

export default ManagerPage
