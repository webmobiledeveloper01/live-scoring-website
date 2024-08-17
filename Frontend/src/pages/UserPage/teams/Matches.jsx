import React, { useEffect, useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Grid,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import CustomTabs from "../../../components/CustomTabs";
import axios from "axios";

function Matches() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    const fetchFixtures = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/tournament-matches"
        ); // Replace with your API endpoint
        console.log(response);
        setFixtures(response.data);
      } catch (error) {
        console.error("Error fetching fixtures:", error);
      }
    };

    fetchFixtures();
  }, []);

  const tabs = [{ text: "Fixtures" }, { text: "Results" }];

  return (
    <Box sx={{ p: 2 }}>
      <CustomTabs borderShow={true} tabData={tabs} />
      {fixtures.map((match, index) => (
        <Paper key={index} elevation={2} sx={{ mb: 2, p: 2 }}>
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

export default Matches;
