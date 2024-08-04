import React from 'react'
import clsx from 'clsx'
import List from '@mui/material/List'
import CustomGauge from '../../components/CustomGauge'
import CustomMultiGauge from '../../components/CustomMultiGauge'
import CustomBarChart from '../../components/CustomBarChart'
import Typography from '@mui/material/Typography'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'

import './manage.css'

import CustomEditTable from '../../components/CustomTable'
import {
  contentMenu,
  columns,
  EditToolbar,
  initialRows
} from './datas/dashboardData'
import { useSelector } from 'react-redux'
import { Main } from '../../styled'

const Dashboard = () => {
  const matchItems = [1, 2, 3, 4]

  const teamInfo = useSelector(state => state.sidebar)
  const open = useSelector(state => state.drawer.open)

  return (
    <>
      <Main open={open}>
        {/* <div className='tablej max-w-[98rem] mxauto mt-40 w-[100%]  !h40 tabldash ml-[20%]'> */}
        <div
          className={
            'tablej mxauto mt-40 w-[100%]  !h40 tabldash ml[20%] transition-all  max-md:m-4  max-md:mt-40 max-md:p-20 max-sm:p-5 '
          }
        >
          <div className='main-head--logo d-flex align-center j-start bg-[#061727] w-[100%] p-4'>
            <img src={teamInfo.icon} alt={teamInfo.text + ' flag'} />
            <div className='main-head--info d-flex flex-column'>
              <h2 className='main-head--team'>{teamInfo.text}</h2>
              <h5 className='main-head--country text-secondary'>
                {teamInfo.subtext}
              </h5>
            </div>
          </div>
          <CustomEditTable
            customToolbar={EditToolbar}
            columns={columns}
            data={initialRows}
            showActions={false}
            className=' !h-40'
          />
        </div>
        {/* <div className='flex gap-10 mx-auto justify-between ml-[20%] items-start max-w7xl w-[78%] mt-0'> */}
        <div
          className={
            'flex gap-10 mxauto justify-between ml[20%] items-start max-w7xl w-[100%] mt-0 transition-all max-md:m-4 max-md:w-full max-md:p-20 max-md:flex-col max-sm:p-5'
          }
        >
          <div className='main-bo=dy w-full'>
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
                    <Typography
                      variant='subtitle1'
                      display='block'
                      gutterBottom
                    >
                      Liverpool
                    </Typography>
                  </Stack>
                  <div className='team-vs-line'></div>
                  <Stack>
                    <img
                      src='https://lsm-static-prod.livescore.com/medium/enet/9825.png'
                      alt=''
                    />
                    <Typography
                      variant='subtitle1'
                      display='block'
                      gutterBottom
                    >
                      Arsenal
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
            <Typography variant='h5' display='block' gutterBottom>
              Upcoming Matchs
            </Typography>

            {matchItems.map((item, index) => (
              <div
                key={index}
                className='d-flex match-item align-center j-between'
              >
                <div className='d-flex match-item-date j-between align-center'>
                  {/* <StarBorderOutlinedIcon></StarBorderOutlinedIcon> */}
                  <div>AET</div>
                  <div>
                    <p>10/20/2024</p>
                    <p>09:00</p>
                  </div>
                </div>
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
                    <Typography
                      variant='subtitle1'
                      display='block'
                      gutterBottom
                    >
                      Liverpool
                    </Typography>
                    {/* <div>1</div> */}
                  </Stack>
                  <div className='team-vs-line'></div>
                  <Stack>
                    <img
                      src='https://lsm-static-prod.livescore.com/medium/enet/9825.png'
                      alt=''
                    />
                    <Typography
                      variant='subtitle1'
                      display='block'
                      gutterBottom
                    >
                      Arsenal
                    </Typography>
                  </Stack>
                  <div>1</div>
                </Stack>{' '}
              </div>
            ))}
          </div>

          <div className='mainboy wfull team-chrt-lists flex flex-col  max-md:m-4 '>
            <List
              subheader='Winning Percentage'
              sx={{
                backgroundColor: '#041421',
                borderRadius: '8px',
                margin: '10px 0 20px 0',
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
                margin: '20px 0',
                padding: '10px'
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
        </div>
      </Main>
    </>
  )
}

export default Dashboard
