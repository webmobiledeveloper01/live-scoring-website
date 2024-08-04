import React from 'react'
import { 
  Typography, 
  Divider, 
  Stack, 
  Box, 
  useMediaQuery, 
  useTheme,
  Grid,
  Paper
} from '@mui/material'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'

function Overview() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const matchItems = [1, 2, 3, 4]

  return (
    <Box sx={{ p: 2 }}>
      <Paper elevation={3} sx={{ mb: 3, p: 2 }}>
        <Stack
          direction={isMobile ? 'column' : 'row'}
          divider={!isMobile && <Divider orientation="vertical" flexItem />}
          spacing={2}
          alignItems={isMobile ? 'center' : 'flex-start'}
        >
          <Box sx={{ textAlign: isMobile ? 'center' : 'left', mb: isMobile ? 2 : 0 }}>
            <Typography variant="subtitle1" gutterBottom>
              NEXT MATCH
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center" justifyContent={isMobile ? 'center' : 'flex-start'}>
              <CalendarTodayOutlinedIcon sx={{ fontSize: 25 }} />
              <Box>
                <Typography variant={isMobile ? 'h4' : 'h3'} gutterBottom>
                  20:00
                </Typography>
                <Typography variant="h6" gutterBottom>
                  31 March
                </Typography>
              </Box>
            </Stack>
          </Box>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ width: '100%', maxWidth: 400 }}
          >
            <Stack alignItems="center">
              <img
                src="https://lsm-static-prod.livescore.com/medium/enet/8650.png"
                alt="Liverpool"
                style={{ width: 50, height: 50 }}
              />
              <Typography variant="subtitle2" sx={{ mt: 1 }}>
                Liverpool
              </Typography>
            </Stack>
            <Typography variant="h5">VS</Typography>
            <Stack alignItems="center">
              <img
                src="https://lsm-static-prod.livescore.com/medium/enet/9825.png"
                alt="Arsenal"
                style={{ width: 50, height: 50 }}
              />
              <Typography variant="subtitle2" sx={{ mt: 1 }}>
                Arsenal
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Paper>

      {matchItems.map((item, index) => (
        <Paper key={index} elevation={2} sx={{ mb: 2, p: 2 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={4}>
              <Stack direction="row" spacing={1} alignItems="center">
                <StarBorderOutlinedIcon />
                <Typography variant="body2">AET</Typography>
                <Box>
                  <Typography variant="body2">10/20/2024</Typography>
                  <Typography variant="body2">09:00</Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Stack spacing={1}>
                {[1, 2].map((teamIndex) => (
                  <Stack key={teamIndex} direction="row" justifyContent="space-between" alignItems="center">
                    <Stack direction="row" spacing={1} alignItems="center">
                      <img
                        src="https://lsm-static-prod.livescore.com/medium/enet/8633.png"
                        alt="Team"
                        style={{ width: 20, height: 20 }}
                      />
                      <Typography variant="body1">Real Madrid</Typography>
                    </Stack>
                    <Typography variant="body1">1</Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Box>
  )
}

export default Overview