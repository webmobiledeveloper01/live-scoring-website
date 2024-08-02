// import React from 'react'
import { useSelector } from 'react-redux'
import { Main, DrawerHeader } from '../../styled'
import { Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Avatar from '@mui/material/Avatar'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined'
import SearchIcon from '@mui/icons-material/Search'
// import { Search, SearchIconWrapper, StyledInputBase } from '../../../styled'
// import { requestPlayer } from '../../../redux/actions'
import { randomTraderName, randomId } from '@mui/x-data-grid-generator'
import { GridToolbarContainer } from '@mui/x-data-grid'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from '@mui/material'

function NewsPage () {
  const newsList = [1, 2, 3]
  const open = useSelector(state => state.drawer.open)

  const [opene, setOpen] = useState(false)

  const handleOpen = row => {
    // setCurrentRow(row)
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
    // setCurrentRow({ id: '', name: '', pos: '', avatar: '' })
  }
  return (
    <>
      {/* <div className='max-w-7xl mx-auto mt-0 pl20 max-md:p-4  max-sm:p-5'> */}
      <div className='flex w-[100%] justify-end'>
        <button className='pull-btn mt-40' color='primary' onClick={handleOpen}>
          <PersonAddAltOutlinedIcon />
          &nbsp;&nbsp;add new news
        </button>
      </div>
      <Dialog open={opene} onClose={handleClose}>
        <div className='bg-[#061727]'>
          <DialogTitle>Add new news</DialogTitle>
          <DialogContent className='bg-[#061727]'>
            <TextField
              margin='dense'
              label='Logo'
              type='file'
              fullWidth
              // value={initialRows.pos}
              // onChange={e =>
              //   setinitialRows({ ...initialRows, pos: e.target.value })
              // }
            />
            <TextField
              autoFocus
              margin='dense'
              label='Title'
              type='text'
              fullWidth
              // value={initialRows.name}
              // onChange={e =>
              //   setinitialRows({ ...initialRows, name: e.target.value })
              // }
            />

            <TextField
              margin='dense'
              label='Description'
              type='text'
              fullWidth
              // value={initialRows.avatar}
              // onChange={e =>
              //   setinitialRows({ ...initialRows, avatar: e.target.value })
              // }
            />
            <TextField
              margin='dense'
              label=''
              type='date'
              fullWidth
              // value={initialRows.avatar}
              // onChange={e =>
              //   setinitialRows({ ...initialRows, avatar: e.target.value })
              // }
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Save</Button>
          </DialogActions>
        </div>
      </Dialog>
      <Main open={open}>
        {/* <DrawerHeader /> */}
        <div className='main-body'>
          {newsList.map(() => (
            <div className='news-item'>
              <Stack
                direction={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
              >
                <Stack
                  direction={'row'}
                  alignItems={'center'}
                  justifyContent={'space-between'}
                  sx={{ width: '70%' }}
                >
                  <img
                    style={{
                      width: 130,
                      height: 80,
                      margin: 10,
                      borderRadius: 8
                    }}
                    src='https://uk1.sportal365images.com/process/smp-image-api/livescore.com/14052024/22e1e294-c195-4456-857e-613c4b4abc5e.jpg?operations=fit(260:)&w=260&quality=100'
                    alt=''
                  />
                  <Stack>
                    <Typography variant='h5'>
                      Kilmarnock vs Celtic predictions: O'Riley ready to lead
                      Bhoys to title
                    </Typography>
                    <Stack direction={'row'}>
                      <Stack direction={'row'}>
                        <button className='outline-btn'>
                          Scottish Premiership
                        </button>
                        <button className='outline-btn'>Kilmarnock</button>
                        <button className='outline-btn'>
                          Scottish Premiership
                        </button>
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
                <Typography variant='caption'>5 hours ago</Typography>
              </Stack>
            </div>
          ))}
        </div>
      </Main>
      {/* </div> */}
    </>
  )
}

export default NewsPage
