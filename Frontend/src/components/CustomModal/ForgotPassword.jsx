import React, { useState } from 'react'
import axios from 'axios'

// import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import Box from '@mui/material/Box'

import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Stack from '@mui/material/Stack'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import CloseIcon from '@mui/icons-material/Close'
// import { Form, Button, Alert, Container, Row, Col } from 'bootstrap'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    setError('')

    try {
      const response = await axios.post(
        'https://your-backend-api.com/forgot-password',
        { email }
      )
      setMessage(response.data.message)
    } catch (error) {
      setError(
        error.response ? error.response.data.message : 'An error occurred'
      )
    } finally {
      setLoading(false)
    }
  }
  const navigate = useNavigate()
  const handleLogin = () => {
    // if (!email) {
    //   alert('enter email first')
    //   return
    // }
    navigate('/addteam')
    // dispatch(setAuth({ email }))
    // if (email == 'admin') navigate('/addteam')
    // else if (email == 'manager') navigate('/squad')
    // // navigate('/addteam')
    // dispatch(openSignModal(false))
  }

  return (
    <DialogContent
      dividers
      sx={{ backgroundColor: '#001835d4', border: 'none' }}
      className='max-w-5xl mx-auto mt-40'
    >
      <div className=' flex justify-around items-center gap-10 '>
        <div className='sign-logo'>
          <img src='/images/GFA_logo.svg' alt='' />
        </div>
        <Box sx={{ marginLeft: '0px' }}>
          <Typography variant='h4' gutterBottom>
            Reset Password
          </Typography>
          <FormControl sx={{ m: 1 }} fullWidth variant='outlined'>
            <OutlinedInput
              id='outlined-adornment-email'
              type='text'
              placeholder='User name'
              startAdornment={
                <InputAdornment position='start'>
                  <EmailOutlinedIcon />
                </InputAdornment>
              }
              // onChange={handleEmail}
              // value={email}
            />
          </FormControl>

          <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <FormControlLabel control={<Checkbox />} label='Remember me' />
          </Stack>
          <button
            onClick={handleLogin}
            className='pull-btn text-center text-dark'
            style={{ width: '100%', marginTop: '20px' }}
          >
            Set password
          </button>
        </Box>
      </div>
    </DialogContent>
  )
}

export default ForgotPassword
