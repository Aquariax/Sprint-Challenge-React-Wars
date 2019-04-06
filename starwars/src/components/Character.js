import React from 'react';
import './Starwars.css';

function Character(props) {
    console.log(props)
    return (
        <div className="character">
            <div className="bread">
                <h2>Name: {props.newAttr.name}</h2>
            </div>
            
            <div className="mid">
                <p>Height: {props.newAttr.height}</p>
                <p>Birth Year: {props.newAttr.birth_year}</p>
                <p>Skin Color: {props.newAttr.skin_color}</p>
            </div>
            <div className="mid">
                <p>Eye Color: {props.newAttr.eye_color}</p>
                <p>Weight: {props.newAttr.mass}</p>
                <p>Gender: {props.newAttr.gender}</p>
            </div>
      
            <div className="hair">
                <p>Hair Color: {props.newAttr.hair_color}</p>
            </div>
        
    </div>
    )
  }

export default Character

