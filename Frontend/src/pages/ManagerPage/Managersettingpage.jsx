import React, { useState } from 'react';
import { Box, Typography, IconButton, OutlinedInput, InputAdornment, FormControl, Stack, Avatar, DialogContent } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';

const Managersettingpage = () => {
  const [logoUrl, setLogoUrl] = useState('https://your-default-logo-url.com/logo.png');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setLogoUrl(imageUrl);
    }
  };

  return (
    <DialogContent dividers sx={{ backgroundColor: '#000', border: 'none' }}>
      <Box sx={{ mx: 'auto', maxWidth: '600px', px: { xs: 2, md: 4 }, py: 4, color: '#fff' }}>
        <Typography variant='h4' gutterBottom>
          Team Manager Detail
        </Typography>
        <FormControl sx={{ mb: 2 }} fullWidth variant='outlined'>
          <OutlinedInput
            id='outlined-adornment-logo'
            type='file'
            onChange={handleImageChange}
            startAdornment={
              <InputAdornment position='start'>
                <Avatar src={logoUrl} alt='Logo' sx={{ width: 40, height: 40 }} />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='change logo'
                  component='label'
                  htmlFor='outlined-adornment-logo'
                  edge='end'
                  sx={{ fontSize: '0.8rem', p: 0.5 }}
                >
                  upload profile
                </IconButton>
              </InputAdornment>
            }
            placeholder='Change logo'
            sx={{
              color: '#fff',
              '& .MuiOutlinedInput-notchedOutline': { borderColor: '#fff' },
              '& .MuiOutlinedInput-input': { padding: '10px 14px' },
              '& .MuiInputAdornment-root': { fontSize: '0.8rem' }
            }}
          />
        </FormControl>

        <FormControl sx={{ mb: 2 }} fullWidth variant='outlined'>
          <OutlinedInput
            id='outlined-adornment-email'
            type='text'
            placeholder='Enter Your Name'
            startAdornment={
              <InputAdornment position='start'>
                <EmailOutlinedIcon />
              </InputAdornment>
            }
            sx={{ color: '#fff', '& .MuiOutlinedInput-notchedOutline': { borderColor: '#fff' } }}
          />
        </FormControl>

        <FormControl sx={{ mb: 2 }} fullWidth variant='outlined'>
          <OutlinedInput
            id='outlined-adornment-password'
            type='password'
            placeholder='New Password'
            startAdornment={
              <InputAdornment position='start'>
                <HttpsOutlinedIcon />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position='end'>
                <IconButton aria-label='toggle password visibility' edge='end'>
                  {/* Add password visibility logic here */}
                </IconButton>
              </InputAdornment>
            }
            sx={{ color: '#fff', '& .MuiOutlinedInput-notchedOutline': { borderColor: '#fff' } }}
          />
        </FormControl>

        <FormControl sx={{ mb: 2 }} fullWidth variant='outlined'>
          <OutlinedInput
            id='outlined-adornment-password'
            type='password'
            placeholder='Re-enter New Password'
            startAdornment={
              <InputAdornment position='start'>
                <HttpsOutlinedIcon />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position='end'>
                <IconButton aria-label='toggle password visibility' edge='end'>
                  {/* Add password visibility logic here */}
                </IconButton>
              </InputAdornment>
            }
            sx={{ color: '#fff', '& .MuiOutlinedInput-notchedOutline': { borderColor: '#fff' } }}
          />
        </FormControl>

        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
          {/* Optional: Add remember me checkbox or other elements here */}
        </Stack>

        <Box textAlign='center'>
          <button
            // onClick={handleSave}
            className='pull-btn text-center text-dark'
            style={{ width: '100px', marginTop: '20px', backgroundColor: '#FFC107', color: '#000' }}
          >
            Save
          </button>
        </Box>
      </Box>
    </DialogContent>
  );
};

export default Managersettingpage;
