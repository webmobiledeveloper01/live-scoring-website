import React, { useState } from 'react'
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
import { ContactEmergencyOutlined, LogoDev } from '@mui/icons-material'
import { Avatar } from '@mui/material'

const ImgUpload = ({ onChange, src }) => (
  <label htmlFor='photo-upload' className='custom-file-upload fas'>
    <div className='img-wrap img-upload'>
      <img for='photo-upload' src={src} />
    </div>
    <input id='photo-upload' type='file' onChange={onChange} />
  </label>
)
const Adminsetting = () => {
  const [state, setState] = React.useState({
    file: '',
    imagePreviewUrl:
      'https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true',
    name: '',
    password: '',
    active: 'edit'
  })
  const defaultLogoUrl = 'https://your-default-logo-url.com/logo.png'
  const [logoUrl, setLogoUrl] = useState(defaultLogoUrl)

  const handleImageChange = event => {
    const file = event.target.files[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setLogoUrl(imageUrl)
    }
  }
  return (
    <>
      <DialogContent dividers sx={{ backgroundColo: '5d4', border: 'none' }}>
        <div className='d-flex align-center sign-form'>
          <Box className='ml-[50px] max-md:ml-0'>
            <Typography variant='h4' gutterBottom>
              Team Detail
            </Typography>

            <FormControl sx={{ m: 1 }} fullWidth variant='outlined'>
              <OutlinedInput
                id='outlined-adornment-email'
                type='text'
                placeholder='Name'
                startAdornment={
                  <InputAdornment position='start'>
                    <EmailOutlinedIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl sx={{ m: 1 }} fullWidth variant='outlined'>
              <OutlinedInput
                id='outlined-adornment-password'
                type='email'
                placeholder='Email'
                startAdornment={
                  <InputAdornment position='start'>
                    <HttpsOutlinedIcon />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      edge='end'
                    ></IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl sx={{ m: 1 }} fullWidth variant='outlined'>
              <OutlinedInput
                id='outlined-adornment-password'
                type='password'
                placeholder='Password'
                startAdornment={
                  <InputAdornment position='start'>
                    <EmailOutlinedIcon />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      edge='end'
                    ></IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <Stack
              direction={'row'}
              alignItems={'center'}
              justifyContent={'space-between'}
            >
              {/* <FormControlLabel control={<Checkbox />} label='Remember me' /> */}
            </Stack>
            <button
              //               onClick={handleLogin}
              className='pull-btn text-center text-dark w-[20%] max-md:w-full'
              style={{ marginTop: '20px' }}
            >
              save
            </button>
          </Box>
        </div>
      </DialogContent>
    </>
  )
}

export default Adminsetting
