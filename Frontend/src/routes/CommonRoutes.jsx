import * as React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Test from "../pages/Test";
import NotFound from "../pages/Errors/NotFound";


function CommonRoutes() {
    const location = useLocation();
    return (
        <Routes>
            <Route exact path="/" element={<Test></Test>}></Route>
            <Route exact path="/not-found" element={<NotFound></NotFound>}></Route>
            <Route exact path="*" element={<Navigate to="/not-found" />} />
        </Routes>
    );
}

export default CommonRoutes;
