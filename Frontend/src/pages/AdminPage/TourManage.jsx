import React, { useEffect, useState } from "react";
import CustomEditTable from "../../components/CustomEditTable";
import { columns, EditToolbar } from "../AdminPage/datas/tournamentDetailData";
import "./adminstyle.css";
import TourManageDetail from "./TourManageDetail";
import OfficalPage from "./TourManageDetail/OfficalPage";

const TournamentManagement = () => {
  const [tournaments, setTournaments] = useState([]);
  const [renderPage, setRenderPage] = useState(null);
  const [select, setSelect] = useState(0);
  const menuLists = ["Tournament", "Live", "Players"];

  useEffect(() => {
    fetchTournaments();
  }, []);

  const fetchTournaments = async () => {
    try {
      const response = await fetch(
        "https://live-scoring-website-vjrd.onrender.com/api/tournaments"
      );
      if (!response.ok) throw new Error("Failed to fetch tournaments");
      const data = await response.json();
      console.log("Tournament data", data);
      setTournaments(data);
    } catch (error) {
      console.error("Error fetching tournaments:", error);
    }
  };

  const handleAddTournament = (newTournament) => {
    setTournaments((prevTournaments) => [...prevTournaments, newTournament]);
  };
  const handleDataUpdated = (updatedRows) => {
    setTournaments(updatedRows);
  };

  const handleMenu = (index) => {
    setSelect(index);
    switch (index) {
      case 0:
        setRenderPage(
          <CustomEditTable
            customToolbar={(props) => (
              <EditToolbar {...props} onAddTournament={handleAddTournament} />
            )}
            columns={columns}
            data={tournaments}
            onDataUpdated={handleDataUpdated}
          />
        );
        break;
      case 1:
        setRenderPage(<TourManageDetail />);
        break;
      case 2:
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
