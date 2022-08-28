import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainLandingPage from "../Components/homePage/MainLandingPage";

export default function RouteMain(){
    return (
      <div>
          <BrowserRouter>
              <Routes>
                  <Route index component={MainLandingPage}/>
              </Routes>
          </BrowserRouter>
      </div>
    );
}