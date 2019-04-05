import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div>
          <ul>
            {this.state.starwarsChars.map(function(starwarsChars, index){
              return(
                <div key ={index}>
                  <h2>Name: {starwarsChars.name}</h2>
                  <p>Height: {starwarsChars.height}</p>
                  <p>Birth Year: {starwarsChars.birth_year}</p>
                  <p>Eye Color: {starwarsChars.eye_color}</p>
                  <p>Weight: {starwarsChars.mass}</p>
                  <p>Gender: {starwarsChars.gender}</p>
                  <p>Hair Color: {starwarsChars.hair_color}</p>
                </div>
              )
            })}
            
          </ul> 
        </div>


      </div>
    );
  }
}

export default App;
