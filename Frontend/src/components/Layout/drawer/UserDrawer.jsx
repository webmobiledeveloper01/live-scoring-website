import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import SportsSoccerOutlinedIcon from "@mui/icons-material/SportsSoccerOutlined";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../redux/actions/auth";
import { selectSidebarItem } from "../../../redux/actions/sidebar";

export default function UserDrawer() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();
  const handleSelect = function (data) {
    navigate("/");
    dispatch(selectSidebarItem(data));
  };

  const [teamMenus, setTeamMenus] = useState([]);
  const [competitionMenus, setCompetitionMenus] = useState([]);

  useEffect(() => {
    const fetchTeamsAndTournaments = async () => {
      try {

        const teamsResponse = await axios.get(
          "https://live-scoring-website-vjrd.onrender.com/api/teams"
        );
        const tournamentsResponse = await axios.get(
          "https://live-scoring-website-vjrd.onrender.com/api/tournaments"
        );


        const teams = teamsResponse.data.map((team) => ({
          type: "team",
          text: team.name,
          icon: team.logo,
        }));

        const tournaments = tournamentsResponse.data.map((tournament) => ({
          type: "competition",
          text: tournament.name,
          icon: tournament.logo,
        }));

        setTeamMenus(teams);
        setCompetitionMenus(tournaments);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTeamsAndTournaments();
  }, []);

  const regionMenus = [
    { text: "England", icon: "https://static.livescore.com/i2/fh/england.jpg" },
    { text: "Spain", icon: "https://static.livescore.com/i2/fh/spain.jpg" },
    { text: "Italy", icon: "https://static.livescore.com/i2/fh/italy.jpg" },
    { text: "Germany", icon: "https://static.livescore.com/i2/fh/germany.jpg" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("menuIndex");
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <ListItemButton
        sx={{
          margin: "1px 5px",
          padding: 0,
          "& .MuiListItemIcon-root": { minWidth: 35 },
        }}
      >
        <ListItemIcon>
          <GroupsOutlinedIcon sx={{ color: "var(--main-color)" }} />
        </ListItemIcon>
        <ListItemText primary="MY TEAMS" />
        <ArrowForwardIosIcon sx={{ color: "grey" }} fontSize="small" />
      </ListItemButton>
      <Divider sx={{ borderWidth: "1px" }} />

      <List>
        {teamMenus.map((item, index) => (
          <ListItem
            disablePadding
            key={index}
            onClick={() => handleSelect(item, index)}
          >
            <ListItemButton
              sx={{
                margin: "1px 5px",
                "& .MuiListItemIcon-root": { minWidth: 35 },
              }}
            >
              <ListItemIcon>
                <img src={item.icon} width={20} />
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <ListItemButton
        sx={{
          margin: "1px 5px",
          padding: 0,
          "& .MuiListItemIcon-root": { minWidth: 35 },
        }}
      >
        <ListItemIcon>
          <SportsSoccerOutlinedIcon sx={{ color: "var(--main-color)" }} />
        </ListItemIcon>
        <ListItemText primary="COMPETITIONS" />
        <ArrowForwardIosIcon sx={{ color: "grey" }} fontSize="small" />
      </ListItemButton>
      <Divider sx={{ borderWidth: "1px" }} />

      <List>
        {competitionMenus.map((item, index) => (
          <ListItem
            disablePadding
            key={index}
            onClick={() => handleSelect(item, index)}
          >
            <ListItemButton
              sx={{
                margin: "1px 5px",
                "& .MuiListItemIcon-root": { minWidth: 35 },
              }}
            >
              <ListItemIcon>
                <img src={item.icon} width={20} />
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <ListItemButton
        sx={{
          margin: "1px 5px",
          padding: 0,
          "& .MuiListItemIcon-root": { minWidth: 35 },
        }}
      >
        <ListItemIcon>
          <LanguageOutlinedIcon sx={{ color: "var(--main-color)" }} />
        </ListItemIcon>
        <ListItemText primary="REGIONS" />
        <ArrowForwardIosIcon sx={{ color: "grey" }} fontSize="small" />
      </ListItemButton>
      <Divider sx={{ borderWidth: "1px" }} />

      <List>
        {regionMenus.map((item, index) => (
          <ListItem disablePadding key={index}>
            <ListItemButton
              sx={{
                margin: "1px 5px",
                "& .MuiListItemIcon-root": { minWidth: 35 },
              }}
            >
              <ListItemIcon>
                <img src={item.icon} width={20} />
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding alignItems="center">
          <ListItemText
            primary={"Show more"}
            sx={{
              flex: "none",
              "& *": { color: "var(--main-color) !important" },
            }}
          />
          <ArrowForwardIosIcon sx={{ color: "grey" }} fontSize="small" />
        </ListItem>
      </List>
      <Divider sx={{ borderWidth: "1px" }} />
      <List>
        <ListItem disablePadding onClick={handleLogout}>
          <ListItemButton
            sx={{
              margin: "2px",
              padding: "5px",
              "& .MuiListItemIcon-root": { minWidth: 35 },
            }}
          >
            <ListItemIcon>
              <ExitToAppOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
}
