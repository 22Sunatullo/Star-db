import React, { Component } from "react";

import "./person-deteils.css";
import SwapiService from "../../services/swapi-servies";

export default class PersonDetails extends Component {


  swapieService = new SwapiService()

  state = {
    person: null,
  };

  componentDidMount(){
    this.updatePerson()
  }

  componentDidUpdate(prevProps){
    if(this.props.personId !== prevProps.personId){
      this.updatePerson();
    }
  }

  updatePerson(){
    const {personId} = this.props;
    if (!personId){
      return
    }

    this.swapieService
    .getPerson(personId)
    .then((person)=>{
      this.setState({person})
    })
  }


  render() {

    if(!this.state.person){
      return <span>Select a person list</span>
    }

    const{id, name, gender,
        birthYear, eveColor } = this.state.person

    return (
      <div className="person-details card">
        <img
          className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eveColor}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
