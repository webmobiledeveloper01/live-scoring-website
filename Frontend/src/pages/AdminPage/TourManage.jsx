import React, { useEffect, useState } from "react";
import CustomEditTable from "../../components/CustomEditTable";
import { columns, EditToolbar } from "../AdminPage/datas/tournamentDetailData";
import "./adminstyle.css";
import TourManageDetail from "./TourManageDetail";
import OfficalPage from "./TourManageDetail/OfficalPage";

const TournamentManagement = () => {
  const [tournaments, setTournaments] = useState([]);
  const [sponsors, setSponsors] = useState([]); // State for sponsors
  const [renderPage, setRenderPage] = useState(null);
  const [select, setSelect] = useState(0);
  const menuLists = ["", "Tournament", "Live", "Players"];

  useEffect(() => {
    fetchTournaments();
    fetchSponsors(); // Fetch sponsors when the component mounts
  }, []);

  const fetchTournaments = async () => {
    try {
      const response = await fetch(
        "https://live-scoring-website-vjrd.onrender.com/api/tournaments"
      );
      if (!response.ok) throw new Error("Failed to fetch tournaments");
      const data = await response.json();
      // Call fetchSponsors after tournaments are fetched
      fetchSponsors(data);
    } catch (error) {
      console.error("Error fetching tournaments:", error);
    }
  };

  const fetchSponsors = async (tournamentData) => {
    try {
      const response = await fetch(
        "https://live-scoring-website-vjrd.onrender.com/api/tournament-sponsers"
      );
      if (!response.ok) throw new Error("Failed to fetch sponsors");
      const sponsorsData = await response.json();
      setSponsors(sponsorsData);
      // Once both tournaments and sponsors are fetched, map sponsor names to tournaments
      mapSponsorNames(tournamentData, sponsorsData);
    } catch (error) {
      console.error("Error fetching sponsors:", error);
    }
  };

  const mapSponsorNames = (tournaments, sponsors) => {
    const enrichedTournaments = tournaments.map((tournament) => {
      const sponsor = sponsors.find(
        (sponsor) => sponsor.id === tournament.sponsor_id
      );
      return {
        ...tournament,
        sponsor_name: sponsor ? sponsor.name : "Unknown Sponsor", // Add sponsor name field
      };
    });
    setTournaments(enrichedTournaments); // Update tournaments with sponsor names
  };

  const handleAddTournament = (newTournament) => {
    const sponsor = sponsors.find((s) => s.id === newTournament.sponsor_id);
    const enrichedTournament = {
      ...newTournament,
      sponsor_name: sponsor ? sponsor.name : "Unknown Sponsor",
    };
    setTournaments((prevTournaments) => [
      ...prevTournaments,
      enrichedTournament,
    ]);
  };

  const handleDataUpdated = (updatedRows) => {
    setTournaments(updatedRows);
  };

  const handleMenu = (index) => {
    setSelect(index);
    switch (index) {
      case 1:
        setRenderPage(
          <CustomEditTable
            customToolbar={(props) => (
              <EditToolbar {...props} onAddTournament={handleAddTournament} />
            )}
            columns={columns}
            data={tournaments} // Pass enriched tournaments with sponsor names
            onDataUpdated={handleDataUpdated}
          />
        );
        break;
      case 2:
        setRenderPage(<TourManageDetail />);
        break;
      case 3:
        setRenderPage(<OfficalPage />);
        break;
      default:
        setRenderPage(null);
        break;
    }
  };

  useEffect(() => {
    handleMenu(select);
  }, [select]);

  return (
    <div className="max-w-6xl mx-auto mt-10 ml28 max-md:mx-4 max-md:mt-4">
      <ul className="nav main-nav flex gap-8 bg-[#061727] min-h-[64px] items-center overflow-x-auto rounded-lg mb-6">
        {menuLists.map((item, index) => (
          <li className="nav-item cursor-pointer p-4 flex-shrink-0" key={index}>
            <a
              className={`nav-link cursor-pointer ${
                index === select ? "!active !text-yellow-200" : ""
              }`}
              onClick={() => handleMenu(index)}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className="mai-body">{renderPage}</div>
    </div>
  );
};

export default TournamentManagement;
