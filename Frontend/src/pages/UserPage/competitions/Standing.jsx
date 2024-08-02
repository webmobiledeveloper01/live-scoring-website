import React from "react"
import CustomEditTable from "../../../components/CustomEditTable";
import {columns, initialRows} from "./datas/standingData"


function Standing() {
    
    return (
        <CustomEditTable columns={columns} data={initialRows} actionMode={false}/>
    );
}



export default Standing;
