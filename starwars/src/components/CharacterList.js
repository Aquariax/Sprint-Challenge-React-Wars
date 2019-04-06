import React, { Component } from 'react';
import Character from "./Character";

export class CharacterList extends Component {
  render() {
    return (
      <div>
        <ul className="jase">
           {this.props.cruiser.map(function(publix,index){
                return <Character key = {index} newAttr={publix}/>
            })}

        </ul>
      </div>
    )
  }
}

export default CharacterList
