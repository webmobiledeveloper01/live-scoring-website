import React from "react"
import CustomEditTable from "../../../components/CustomEditTable";
import {columns, initialRows } from "./datas/officalData"

function OfficalPage() {
   
    return (
        <CustomEditTable  columns={columns} data={initialRows} />
    );
}

export default OfficalPage;
