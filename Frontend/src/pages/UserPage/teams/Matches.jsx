import React from 'react'
import { 
  Box, 
  Paper, 
  Typography, 
  Grid, 
  Stack, 
  useMediaQuery, 
  useTheme 
} from '@mui/material'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import CustomTabs from '../../../components/CustomTabs'

function Matches() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const matchItems = [1, 2, 3, 4]
  const tabs = [{ text: 'Fixtures' }, { text: 'Results' }]

  return (
    <Box sx={{ p: 2 }}>
      <CustomTabs borderShow={true} tabData={tabs} />
      {matchItems.map((item, index) => (
        <Paper key={index} elevation={2} sx={{ mb: 2, p: 2 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={4}>
              <Stack direction="row" spacing={1} alignItems="center" justifyContent={isMobile ? "space-between" : "flex-start"}>
                <StarBorderOutlinedIcon />
                <Typography variant="body2">AET</Typography>
                <Box>
                  <Typography variant="body2">10/20/2024</Typography>
                  <Typography variant="body2">09:00</Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Stack spacing={2}>
                {[1, 2].map((teamIndex) => (
                  <Stack 
                    key={teamIndex} 
                    direction="row" 
                    justifyContent="space-between" 
                    alignItems="center"
                  >
                    <Stack direction="row" spacing={1} alignItems="center">
                      <img
                        src="https://lsm-static-prod.livescore.com/medium/enet/8633.png"
                        alt="Team"
                        style={{ width: 20, height: 20 }}
                      />
                      <Typography variant="body1">Real Madrid</Typography>
                    </Stack>
                    {!isMobile && (
                      <Typography variant="body1">-</Typography>
                    )}
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

export default Matches