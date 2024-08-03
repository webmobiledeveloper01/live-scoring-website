import React from 'react';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';

function Matches() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  const roundItems = [
    { title: 'ROUND 28', menuItems: [1, 2, 3] },
    { title: 'ROUND 27', menuItems: [1, 2] }
  ];

  return (
    <Box sx={{ p: 2 }}>
      {roundItems.map((round, roundIndex) => (
        <Box key={roundIndex} sx={{ mb: 4 }}>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 'bold', 
              mb: 2, 
              fontSize: isLargeScreen ? '2rem' : '1.25rem' // Larger font size for large screens
            }}
          >
            {round.title}
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            bgcolor: 'background.paper',
            borderRadius: 1,
            overflow: 'hidden',
            boxShadow: 2,
            width: isLargeScreen ? '80%' : '100%', // Wider container on large screens
            maxWidth: isLargeScreen ? 1200 : '100%' // Set max width for large screens
          }}>
            <Box sx={{ 
              display: 'flex', 
              p: isLargeScreen ? 4 : 2, // More padding for large screens
              bgcolor: 'background.default',
              borderBottom: '1px solid',
              borderColor: 'divider'
            }}>
              <Typography sx={{ 
                width: isMobile ? '40%' : '35%', // Wider column on larger screens
                fontWeight: 'bold',
                fontSize: isLargeScreen ? '1.5rem' : '1rem', // Larger font size for large screens
                mr: isLargeScreen ? 8 : 2 // Increased margin-right for larger screens
              }}>DATE</Typography>
              <Typography sx={{ 
                flex: 1, 
                fontWeight: 'bold',
                fontSize: isLargeScreen ? '1.5rem' : '1rem' // Larger font size for large screens
              }}>TEAM</Typography>
            </Box>
            {round.menuItems.map((item, itemIndex) => (
              <Box key={itemIndex} sx={{ 
                display: 'flex', 
                p: isLargeScreen ? 4 : 2, // More padding for large screens
                borderBottom: '1px solid',
                borderColor: 'divider',
                '&:last-child': { borderBottom: 'none' }
              }}>
                <Box sx={{ 
                  width: isMobile ? '40%' : '25%', // Wider column on larger screens
                  display: 'flex', 
                  alignItems: 'center',
                  pr: isLargeScreen ? 4 : 2 // Increased padding-right for larger screens
                }}>
                  <StarBorderOutlinedIcon sx={{ mr: 1, fontSize: isLargeScreen ? 36 : 24 }} />
                  <Box>
                    <Typography 
                      variant="body2" 
                      display="block" 
                      sx={{ fontSize: isLargeScreen ? '1.2rem' : '0.875rem' }} // Larger font size for large screens
                    >
                      10/20/2024
                    </Typography>
                    <Typography 
                      variant="body2" 
                      display="block" 
                      sx={{ mt: 0.5, fontSize: isLargeScreen ? '1.2rem' : '0.875rem' }} // Larger font size for large screens
                    >
                      09:00
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ flex: 1, pl: isLargeScreen ? 4 : 0 }}> {/* Increased padding-left for larger screens */}
                  {['Leral Madrid', 'Leral Madrid'].map((team, teamIndex) => (
                    <Box key={teamIndex} sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      mb: teamIndex === 0 ? 1 : 0,
                      fontSize: isLargeScreen ? '1.2rem' : '0.875rem' // Larger font size for large screens
                    }}>
                      <img
                        src='https://lsm-static-prod.livescore.com/medium/enet/8633.png'
                        alt={team}
                        style={{ width: isLargeScreen ? 36 : 24, height: isLargeScreen ? 36 : 24, marginRight: 8 }} // Larger icon size for large screens
                      />
                      <Typography variant="body2">{team}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default Matches;
