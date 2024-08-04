import React, { useState } from 'react'
import { 
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Grid,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  Zoom,
  Fade,
  Card,
  CardContent,
  CardMedia,
  IconButton
} from '@mui/material'
import { styled } from '@mui/system'
import { Main } from '../../styled'
import { useSelector } from 'react-redux'
import DownloadIcon from '@mui/icons-material/Download'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#0a2235',
  color: 'white',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}))

const StyledCardMedia = styled(CardMedia)({
  height: 140,
  backgroundSize: 'contain',
})

const StyledCardContent = styled(CardContent)({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  backgroundColor: '#061727',
  color: 'white',
  padding: theme.spacing(2),
}))

const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  backgroundColor: '#061727',
  color: 'white',
  padding: theme.spacing(2),
}))

const StyledDialogActions = styled(DialogActions)(({ theme }) => ({
  backgroundColor: '#061727',
  padding: theme.spacing(1, 2),
}))

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.23)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.5)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.7)',
  },
  '& .MuiInputBase-input': {
    color: 'white',
  },
}))

const StyledButton = styled(Button)(({ theme }) => ({
  color: 'white',
  borderColor: 'rgba(255, 255, 255, 0.23)',
  '&:hover': {
    borderColor: 'rgba(255, 255, 255, 0.5)',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
}))

function JerseyPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [selectedJersey, setSelectedJersey] = useState(null)
  const [newJerseyTitle, setNewJerseyTitle] = useState('')
  const [newJerseyImage, setNewJerseyImage] = useState(null)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const jerseyList = [
    { title: 'Jersey Home', icon: '/images/jersey/liverpool-red.avif' },
    { title: 'Jersey Away', icon: '/images/jersey/liverpool-black.avif' },
    { title: 'Third Kit', icon: '/images/jersey/liverpool-white.avif' },
    { title: 'Goal Keeper', icon: '/images/jersey/liverpool-green.avif' }
  ]

  const handleCardClick = jersey => {
    setSelectedJersey(jersey)
    setIsPopupOpen(true)
    setNewJerseyTitle(jersey.title === 'Add New Jersey' ? '' : jersey.title)
    setNewJerseyImage(null)
  }

  const handleClose = () => {
    setIsPopupOpen(false)
    setSelectedJersey(null)
    setNewJerseyTitle('')
    setNewJerseyImage(null)
  }

  const handleSave = () => {
    console.log('Saving:', { title: newJerseyTitle, image: newJerseyImage })
    handleClose()
  }

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      setNewJerseyImage(URL.createObjectURL(file))
    }
  }

  const open = useSelector(state => state.drawer.open)

  return (
    <Main open={open}>
      <Box sx={{ 
        maxWidth: 'lg', 
        mx: 'auto', 
        mt: 7, 
        px: isMobile ? 2 : 3 
      }}>
        <Typography variant="h4" component="h1" gutterBottom color="white">
          Jersey Collection
        </Typography>
        <Grid container spacing={3} sx={{ 
          flexDirection: { xs: 'column', sm: 'row' },
          flexWrap: { xs: 'nowrap', sm: 'wrap' },
          overflowY: { xs: 'auto', sm: 'visible' },
          overflowX: { xs: 'visible', sm: 'auto' },
          height: { xs: 'calc(100vh - 100px)', sm: 'auto' },
          pb: 2 
        }}>
          {jerseyList.map((item, index) => (
            <Zoom in={true} style={{ transitionDelay: `${index * 100}ms` }} key={item.title}>
              <Grid item xs={12} sm={6} md={4} lg={3} sx={{ minWidth: { sm: 200 } }}>
                <StyledCard onClick={() => handleCardClick(item)}>
                  <StyledCardMedia
                    image={item.icon}
                    title={item.title}
                  />
                  <StyledCardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {item.title}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                      <IconButton size="small" sx={{ color: 'white' }}>
                        <DownloadIcon />
                      </IconButton>
                      <IconButton size="small" sx={{ color: 'white' }}>
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </StyledCardContent>
                </StyledCard>
              </Grid>
            </Zoom>
          ))}
          <Zoom in={true} style={{ transitionDelay: `${jerseyList.length * 100}ms` }}>
            <Grid item xs={12} sm={6} md={4} lg={3} sx={{ minWidth: { sm: 200 } }}>
              <StyledCard onClick={() => handleCardClick({ title: 'Add New Jersey' })}>
                <StyledCardContent sx={{ justifyContent: 'center', alignItems: 'center' }}>
                  <IconButton size="large" sx={{ color: 'white' }}>
                    <AddIcon fontSize="large" />
                  </IconButton>
                  <Typography variant="h6" component="div" align="center">
                    Add New Jersey
                  </Typography>
                </StyledCardContent>
              </StyledCard>
            </Grid>
          </Zoom>
        </Grid>

        <Dialog 
          open={isPopupOpen} 
          onClose={handleClose} 
          fullWidth 
          maxWidth="sm"
          TransitionComponent={Fade}
          transitionDuration={300}
        >
          <StyledDialogTitle>
            {selectedJersey ? selectedJersey.title : 'Add New Jersey'}
          </StyledDialogTitle>
          <StyledDialogContent>
            <StyledTextField
              autoFocus
              margin='dense'
              label='Title'
              type='text'
              fullWidth
              variant="outlined"
              value={newJerseyTitle}
              onChange={(e) => setNewJerseyTitle(e.target.value)}
            />
            <StyledButton
              variant="outlined"
              component="label"
              fullWidth
            >
              {newJerseyImage ? 'Change Jersey Image' : 'Upload Jersey Image'}
              <input type="file" hidden onChange={handleImageUpload} accept="image/*" />
            </StyledButton>
            {newJerseyImage && (
              <Box mt={2} display="flex" justifyContent="center">
                <img src={newJerseyImage} alt="Uploaded Jersey" style={{ maxWidth: '100%', maxHeight: '200px' }} />
              </Box>
            )}
          </StyledDialogContent>
          <StyledDialogActions>
            <StyledButton onClick={handleClose}>Cancel</StyledButton>
            <StyledButton onClick={handleSave} disabled={!newJerseyTitle.trim()}>Save</StyledButton>
          </StyledDialogActions>
        </Dialog>
      </Box>
    </Main>
  )
}

export default JerseyPage