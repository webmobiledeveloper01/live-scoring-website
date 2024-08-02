import React from "react"
import CustomEditTable from "../../../components/CustomEditTable";
import { columns, initialRows } from "./datas/matchData"
function TeamPage() {
    return (
        <CustomEditTable columns={columns} data={initialRows} option={{rowHeight:80}}/>
    );
}

export default TeamPage;
