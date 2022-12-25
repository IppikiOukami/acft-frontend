import {DataGrid} from '@mui/x-data-grid';
import {getAllSMs} from "../utils/AxiosCalls";
import React, {useEffect, useState} from "react";

export default function TableComponent(){
    const [compData, setCompData] = useState([]);
    useEffect(() => {
        async function fetchData(){
            return await getAllSMs();
        }
        fetchData()
            .then(r => setCompData(r));
    }, []);
    const columns = [
        {headerName: "First Name",      field: "firstName", width: 130},
        {headerName: "Last Name",       field: "lastName",  width: 130},
        {headerName: "DOD ID",          field: "doD_ID",    width: 130},
        {headerName: "MOS",             field: "mos",       width: 50},
        {headerName: "Platoon",         field: "platoon",   width: 50},
        {headerName: "Gender",          field: "gender",    width: 50},
        {headerName: "No. Tests",       field: "noTests",   width: 50},
        {headerName: "Date of Arrival", field: "doA",       width: 100},
        {headerName: "Date of Birth",   field: "doB",       width: 100}]
    const rows = convert2dict(compData);
    function convert2dict(objArr){
        let content = [];
        for(let obj of objArr) {
            obj.id = obj["doD_ID"];
            content.push(obj);
        }
        return content;
    }
    return compData?(
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} pageSize={20} rowsPerPageOptions={[10,20,30,50]} checkboxSelection/>
        </div>
    ):(
        <div>
            <p>No data to display!</p>
        </div>
    );
}