import * as React from 'react'
import { Logo, DrawerHeader } from '../../styled'
import { IconButton } from '@mui/material'
import { useDispatch } from 'react-redux'
import { handleDrawer } from '../../redux/actions'
import { useTheme } from '@mui/material/styles'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'

export default function SiteLogo () {
  const theme = useTheme()
  const dispatch = useDispatch()
  const handleDrawerClose = () => {
    dispatch(handleDrawer(false))
  }
  return (
    <DrawerHeader>
      <IconButton onClick={handleDrawerClose}>
        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </IconButton>
      <Logo>
        <img src='/images/GFA_logo.svg' alt='' />
        <div className='d-flex flex-column'>
          <h5 className='text-main'>Golden</h5>
          <small className='text-main'>FUTSAL ASSOCIATION</small>
        </div>
      </Logo>
    </DrawerHeader>
  )
}
