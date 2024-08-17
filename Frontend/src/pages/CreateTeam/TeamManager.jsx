import React, { useState, useEffect } from "react";
import axios from "axios";
import CustomEditTable from "../../components/CustomEditTable";
import {
  contentMenu,
  columns,
  EditToolbar,
} from "../AdminPage/datas/CreateTeamdata";
import { Main } from "../../styled";
import { useSelector } from "react-redux";

const Createteam = () => {
  const open = useSelector((state) => state.drawer.open);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios
      .get("https://live-scoring-website-vjrd.onrender.com/api/teams")
      .then((response) => {
        setRows(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <Main open={open} className="mt-40">
        <div className="max-w-6xl mx-auto mt-10 ml28 max-md:m-0 max-md:p-4">
          {/* <CustomTab borderShow={true} tabData={contentMenu} /> */}
          <CustomEditTable
            customToolbar={EditToolbar}
            columns={columns}
            data={rows} // Pass the fetched rows data
            showActions={true}
          />
        </div>
      </Main>
    </>
  );
};
export default Createteam;
