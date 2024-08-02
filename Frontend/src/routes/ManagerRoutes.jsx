import * as React from "react";
import { Routes } from "react-router-dom";
import ManagerPage from "../pages/ManagerPage";

function ManagerRoutes() {
    return (
        <Routes>
            <Route exact path="/teamManagerPage" element={<ManagerPage></ManagerPage>}></Route>
        </Routes>
    );
}

export default ManagerRoutes;
