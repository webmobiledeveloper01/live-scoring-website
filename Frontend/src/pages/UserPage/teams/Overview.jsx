import React from 'react'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import Typography from '@mui/material/Typography'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'

function Overview () {
  const matchItems = [1, 2, 3, 4]
  return (
    <>
      <div className='main-body'>
        <Box
          className='match-item'
          sx={{ '& > div': { width: '100% !important' } }}
        >
          <Stack
            direction={'row'}
            divider={<Divider orientation='vertical' flexItem />}
            spacing={2}
            justifyContent={'space-around'}
          >
            <Box>
              <Typography variant='subtitle1' display='block' gutterBottom>
                NEXT MATCH
              </Typography>
              <Stack spacing={2} direction='row' alignItems={'center'}>
                <CalendarTodayOutlinedIcon sx={{ fontSize: 25 }} />
                <Stack spacing={1}>
                  <Typography variant='h3' display='block' gutterBottom>
                    20:00
                  </Typography>
                  <Typography variant='h6' display='block' gutterBottom>
                    31 March
                  </Typography>
                </Stack>
              </Stack>
            </Box>
            <Stack
              direction={'row'}
              justifyContent={'space-between'}
              alignItems={'center'}
              sx={{ width: '40%' }}
            >
              <Stack>
                <img
                  src='https://lsm-static-prod.livescore.com/medium/enet/8650.png'
                  alt=''
                />
                <Typography variant='subtitle1' display='block' gutterBottom>
                  Liverpool
                </Typography>
              </Stack>
              <div className='team-vs-line'></div>
              <Stack>
                <img
                  src='https://lsm-static-prod.livescore.com/medium/enet/9825.png'
                  alt=''
                />
                <Typography variant='subtitle1' display='block' gutterBottom>
                  Arsenal
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Box>

        {matchItems.map((item, index) => (
          <div key={index} className='d-flex match-item align-center j-between'>
            <div className='d-flex match-item-date j-between align-center'>
              <StarBorderOutlinedIcon></StarBorderOutlinedIcon>
              <div>AET</div>
              <div>
                <p>10/20/2024</p>
                <p>09:00</p>
              </div>
            </div>
            <div className='d-flex flex-column match-item-team'>
              <div className='d-flex j-between align-center'>
                <div>
                  <img
                    className='team-mark-small'
                    src='https://lsm-static-prod.livescore.com/medium/enet/8633.png'
                  />
                  <span>Leral Madrid</span>
                </div>
                <div>1</div>
              </div>
              <div className='d-flex j-between align-center'>
                <div>
                  <img
                    className='team-mark-small'
                    src='https://lsm-static-prod.livescore.com/medium/enet/8633.png'
                  />
                  <span>Leral Madrid</span>
                </div>
                <div>1</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Overview
