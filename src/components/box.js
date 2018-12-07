import React, { Component } from 'react'

class Box extends Component {
  render() {
    const characters= this.props.characters;
    return (
      <div >
        {characters.map( ({ name, alias, quirk, dob,image, i }) => (
        <div className="characterBox" key={name[0]+alias[0]}>
        <img src={image} height="200" className="leftSide" alt={name}/>
        <div className="rightSide">
        <p> Name: <strong style={{"fontSize":"20px"}}><br/>{name}</strong></p>
        <p> Alias: <strong style={{"fontSize":"20px"}}><br/>{alias}</strong></p>
        <p> Quirk: <br/><strong>{quirk}</strong></p>
        <p> DOB: <br/><strong>{dob}</strong></p>
        </div>
        </div>
        ))}
      </div>
    )
  }
}
export default Box;