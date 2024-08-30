import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import {
  Box,
  Grid,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Overview() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    const fetchFixtures = async () => {
      try {
        const response = await axios.get(
          "https://live-scoring-website-vjrd.onrender.com/api/tournament-matches" // Replace with your API endpoint
        );
        console.log(response);
        setFixtures(response.data);
      } catch (error) {
        console.error("Error fetching fixtures:", error);
      }
    };

    fetchFixtures();
  }, []);

  return (
    <Box sx={{ p: 2 }}>
      <Paper elevation={3} sx={{ mb: 3, p: 2 }}>
        <Stack
          direction={isMobile ? "column" : "row"}
          spacing={2}
          alignItems={isMobile ? "center" : "flex-start"}
        >
          <Box
            sx={{
              textAlign: isMobile ? "center" : "left",
              mb: isMobile ? 2 : 0,
            }}
          >
            <Typography variant="subtitle1" gutterBottom>
              NEXT MATCH
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent={isMobile ? "center" : "flex-start"}
            >
              <StarBorderOutlinedIcon sx={{ fontSize: 25 }} />
              <Box>
                <Typography variant={isMobile ? "h4" : "h3"} gutterBottom>
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
            sx={{ width: "100%", maxWidth: 400 }}
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

      {fixtures.map((match) => (
        <Paper key={match.id} elevation={2} sx={{ mb: 2, p: 2 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={4}>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                justifyContent={isMobile ? "space-between" : "flex-start"}
              >
                <StarBorderOutlinedIcon />
                <Typography variant="body2">{match.match_status}</Typography>
                <Box>
                  <Typography variant="body2">
                    {new Date(match.match_time).toLocaleDateString()}
                  </Typography>
                  <Typography variant="body2">
                    {new Date(match.match_time).toLocaleTimeString()}
                  </Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Stack spacing={2}>
                {[match.teamA, match.teamB].map((team, teamIndex) => (
                  <Stack
                    key={teamIndex}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Stack direction="row" spacing={1} alignItems="center">
                      <img
                        src={team.logo} // Assume your API provides a logo URL
                        alt={team.name}
                        style={{ width: 20, height: 20 }}
                      />
                      <Typography variant="body1">{team.name}</Typography>
                    </Stack>
                    {!isMobile && <Typography variant="body1">-</Typography>}
                  </Stack>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Box>
  );
}

export default Overview;
