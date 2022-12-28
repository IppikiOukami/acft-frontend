import React from "react";
import MainPage from '../landingpage/MainPage';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Company from "../common-components/Company";
import NewSMs from "../common-components/NewSMs";

export default function Routing(){
    return(
        <Router>
            <Routes>
                <Route exact path='/' element={<MainPage/>}/>
                <Route exact path='/company' element={<Company/>}/>
                <Route exact path='/newSMs' element={<NewSMs/>}/>
            </Routes>
        </Router>
    )
}