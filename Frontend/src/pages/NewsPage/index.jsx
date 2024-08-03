import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Main } from '../../styled'
import { Stack, Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Box, Container, Grid, Paper } from '@mui/material'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined'

function NewsPage() {
  const newsList = [1, 2, 3]
  const open = useSelector(state => state.drawer.open)
  const [opene, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleOpen} 
          startIcon={<PersonAddAltOutlinedIcon />}
          sx={{ borderRadius: 2 }}
        >
          Add new news
        </Button>
      </Box>

      <Dialog open={opene} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Add new news</DialogTitle>
        <DialogContent>
          <TextField margin="dense" label="Logo" type="file" fullWidth />
          <TextField autoFocus margin="dense" label="Title" type="text" fullWidth />
          <TextField margin="dense" label="Description" type="text" fullWidth multiline rows={4} />
          <TextField margin="dense" label="Date" type="date" fullWidth InputLabelProps={{ shrink: true }} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} variant="contained" color="primary">Save</Button>
        </DialogActions>
      </Dialog>

      <Main open={open}>
        <Grid container spacing={3}>
          {newsList.map((_, index) => (
            <Grid item xs={12} key={index}>
              <Paper elevation={2} sx={{ p: 2, borderRadius: 2 }}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12} sm={4} md={3}>
                    <Box sx={{ position: 'relative', paddingTop: '60%', borderRadius: 2, overflow: 'hidden' }}>
                      <img
                        src='https://uk1.sportal365images.com/process/smp-image-api/livescore.com/14052024/22e1e294-c195-4456-857e-613c4b4abc5e.jpg?operations=fit(260:)&w=260&quality=100'
                        alt=''
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={8} md={9}>
                    <Typography variant='h6' gutterBottom sx={{ fontWeight: 'bold' }}>
                      Kilmarnock vs Celtic predictions: O'Riley ready to lead Bhoys to title
                    </Typography>
                    <Box sx={{ mb: 1 }}>
                      {['Scottish Premiership', 'Kilmarnock', 'Celtic'].map((tag, i) => (
                        <Button 
                          key={i} 
                          variant="outlined" 
                          size="small" 
                          sx={{ mr: 1, mb: 1, borderRadius: 4, textTransform: 'none' }}
                        >
                          {tag}
                        </Button>
                      ))}
                    </Box>
                    <Typography variant='caption' sx={{ display: 'block', mt: 1 }}>5 hours ago</Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Main>
    </Container>
  )
}

export default NewsPage