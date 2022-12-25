import React from "react";
import MainPage from '../landingpage/MainPage';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Company from "../common-components/Company";

export default function Routing(){
    return(
        <Router>
            <Routes>
                <Route exact path='/' element={<MainPage/>}/>
                <Route exact path='/company' element={<Company/>}/>
            </Routes>
        </Router>
    )
}