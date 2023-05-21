import React from "react";
import { Header } from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import ItemList from "../item-list/item-list";

import './app.css'
import PersonDetails from "../person-deteils/person-deteils";
import ErrorButton from "../error-button/error-button";


export const App = () => {
  return (
    <div className="App">
      <Header />
      <RandomPlanet />

      <div className="row mb2">
        <div className="col-md-6 mt-3">
          <ItemList />
        </div>
        <div className="col-md-6">
          <PersonDetails/>
        </div>
      </div>
    </div>
  );
};
