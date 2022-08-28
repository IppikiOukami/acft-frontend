import React from "react";
import {ReactComponent as ArmyIcon} from "../assets/images/Logo_of_the_United_States_Army.svg";

export default function Header(props){
    let {company} = props;
    if(!company){
        company = 'Admin Mode';
    }
    return (
        <div className="Header">
            <div className="Header-Logo">
                <ArmyIcon className="Header-Logo-ArmyIcon"/>
                <h1> APFT/ACFT Tracker </h1>
            </div>
            <p>{company}</p>
        </div>
    );
}