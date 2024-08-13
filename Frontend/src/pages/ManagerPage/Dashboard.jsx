import React, { useEffect, useState } from "react";
import axios from "axios";
import clsx from "clsx";
import List from "@mui/material/List";
import CustomGauge from "../../components/CustomGauge";
import CustomMultiGauge from "../../components/CustomMultiGauge";
import CustomBarChart from "../../components/CustomBarChart";
import Typography from "@mui/material/Typography";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import "./manage.css";

import CustomEditTable from "../../components/CustomTable";
import {
  contentMenu,
  columns,
  EditToolbar,
  initialRows,
} from "./datas/dashboardData";
import { useSelector } from "react-redux";
import { Main } from "../../styled";

const Dashboard = () => {
  const [teams, setTeams] = useState([]);
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  const teamInfo = useSelector((state) => state.sidebar);
  const open = useSelector((state) => state.drawer.open);

  useEffect(() => {
    const fetchTeamsAndMatches = async () => {
      try {
        const teamsResponse = await axios.get("/api/teams");
        const matchesResponse = await axios.get("/api/tournament-matches");

        setTeams(teamsResponse.data);
        setMatches(matchesResponse.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchTeamsAndMatches();
  }, []);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  // Sample scores for demonstration; adjust as needed
  const score = () =>
    `${Math.floor(Math.random() * 5)} - ${Math.floor(Math.random() * 5)}`;

  const getTeamNameAndIcon = (teamId) => {
    const team = teams.find((t) => t.id === teamId);
    return team
      ? { name: team.name, icon: team.icon }
      : { name: "Unknown Team", icon: "default-icon.png" };
  };

  const upcomingMatches = matches.slice(0, 4); // Limit to 4 upcoming matches

  return (
    <>
      <Main open={open}>
        <div
          className={
            "tablej mxauto mt-40 w-[100%]  !h40 tabldash ml[20%] transition-all  max-md:m-4  max-md:mt-40 max-md:p-20 max-sm:p-5 "
          }
        >
          <div className="main-head--logo d-flex align-center j-start bg-[#061727] w-[100%] p-4">
            <img src={teamInfo.icon} alt={teamInfo.text + " flag"} />
            <div className="main-head--info d-flex flex-column">
              <h2 className="main-head--team">{teamInfo.text}</h2>
              <h5 className="main-head--country text-secondary">
                {teamInfo.subtext}
              </h5>
            </div>
          </div>
          <CustomEditTable
            customToolbar={EditToolbar}
            columns={columns}
            data={initialRows}
            showActions={false}
            className=" !h-40"
          />
        </div>
        <div
          className={
            "flex gap-10 mxauto justify-between ml[20%] items-start max-w7xl w-[100%] mt-0 transition-all max-md:m-4 max-md:w-full max-md:p-20 max-md:flex-col max-sm:p-5"
          }
        >
          <div className="main-bo=dy w-full">
            <Box
              className="match-item"
              sx={{ "& > div": { width: "100% !important" } }}
            >
              <Stack
                direction={"row"}
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
                justifyContent={"space-around"}
              >
                <Box>
                  <Typography variant="subtitle1" display="block" gutterBottom>
                    NEXT MATCH
                  </Typography>
                  <Stack spacing={2} direction="row" alignItems={"center"}>
                    <CalendarTodayOutlinedIcon sx={{ fontSize: 25 }} />
                    <Stack spacing={1}>
                      <Typography variant="h3" display="block" gutterBottom>
                        {upcomingMatches[0]?.match_time
                          ? upcomingMatches[0].match_time.toLocaleTimeString(
                              [],
                              { hour: "2-digit", minute: "2-digit" }
                            )
                          : "20:00"}
                      </Typography>
                      <Typography variant="h6" display="block" gutterBottom>
                        {upcomingMatches[0]?.match_time
                          ? upcomingMatches[0].match_time.toLocaleDateString()
                          : "31 March"}
                      </Typography>
                    </Stack>
                  </Stack>
                </Box>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  sx={{ width: "40%" }}
                >
                  <Stack>
                    <img
                      src={getTeamNameAndIcon(upcomingMatches[0]?.teamIdA).icon}
                      alt=""
                    />
                    <Typography
                      variant="subtitle1"
                      display="block"
                      gutterBottom
                    >
                      {getTeamNameAndIcon(upcomingMatches[0]?.teamIdA).name}
                    </Typography>
                  </Stack>
                  <div className="team-vs-line"></div>
                  <Stack>
                    <img
                      src={getTeamNameAndIcon(upcomingMatches[0]?.teamIdB).icon}
                      alt=""
                    />
                    <Typography
                      variant="subtitle1"
                      display="block"
                      gutterBottom
                    >
                      {getTeamNameAndIcon(upcomingMatches[0]?.teamIdB).name}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
            <Typography variant="h5" display="block" gutterBottom>
              Upcoming Matches
            </Typography>

            {upcomingMatches.map((match, index) => (
              <div
                key={index}
                className="d-flex match-item align-center j-between"
              >
                <div className="d-flex match-item-date j-between align-center">
                  <div>AET</div>
                  <div>
                    <p>{match.match_time.toLocaleDateString()}</p>
                    <p>
                      {match.match_time.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  sx={{ width: "40%" }}
                >
                  <Stack>
                    <img src={getTeamNameAndIcon(match.teamIdA).icon} alt="" />
                    <Typography
                      variant="subtitle1"
                      display="block"
                      gutterBottom
                    >
                      {getTeamNameAndIcon(match.teamIdA).name}
                    </Typography>
                  </Stack>
                  <div className="team-vs-line"></div>
                  <Stack>
                    <img src={getTeamNameAndIcon(match.teamIdB).icon} alt="" />
                    <Typography
                      variant="subtitle1"
                      display="block"
                      gutterBottom
                    >
                      {getTeamNameAndIcon(match.teamIdB).name}
                    </Typography>
                  </Stack>
                  <div>{score()}</div>
                </Stack>
              </div>
            ))}
          </div>

          <div className="mainboy wfull team-chrt-lists flex flex-col  max-md:m-4 ">
            <List
              subheader="Winning Percentage"
              sx={{
                backgroundColor: "#041421",
                borderRadius: "8px",
                margin: "10px 0 20px 0",
                padding: "10px",
              }}
            >
              <CustomGauge value={20} />
            </List>
            <List
              subheader="Match History"
              sx={{
                backgroundColor: "#041421",
                borderRadius: "8px",
                margin: "20px 0",
                padding: "10px",
              }}
            >
              <CustomBarChart value={75} />
            </List>
            <List
              subheader="Team Performance"
              sx={{
                backgroundColor: "#041421",
                borderRadius: "8px",
                margin: "20px 0",
                padding: "10px",
              }}
            >
              <CustomMultiGauge />
            </List>
          </div>
        </div>
      </Main>
    </>
  );
};

export default Dashboard;
