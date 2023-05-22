import React, { Component } from "react";
import { Header } from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import ItemList from "../item-list/item-list";

import "./app.css";
import PersonDetails from "../person-deteils/person-deteils";
import ErrorButton from "../error-button/error-button";
import SwapiService from "../../services/swapi-servies";

export default class App extends Component {


  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    selectedPerson: 1
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  onPersonSelected = (id) =>{

    this.setState({
      selectedPerson: id
    })
  }

  render() {

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;


    const { getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage,
      getAllPeople,
      getAllPlanets } = this.swapiService;
      
    return (
      <div className="App">
        <Header />
        {planet}

        <button
        className="toggle-planet btn btn-warning btn-lg"
        onClick={this.toggleRandomPlanet}>
        Toggle Random Planet
        </button>

        <div className="row mb2">
          <div className="col-md-6 mt-3">
            <ItemList onItemSelected ={this.onPersonSelected}/>
          </div>
          <div className="col-md-6">
            <PersonDetails personId = {this.state.selectedPerson}/>
          </div>
        </div>
      </div>
    );
  }
}
