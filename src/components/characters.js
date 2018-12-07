import React, { Component } from 'react'
import Box from  './box';
import { connect } from 'react-redux';
import { getHeroes, getVilains } from '../actions/characterAction';

class Characters extends Component {
  
  selectHeroes = () => {
  this.props.getHeroes();
  }

 selectVilains = () => {
    this.props.getVilains();

 }
  render() {
      const characters = this.props.character;
        return (
            <div>
              <div className="btnGroup">
              <button onClick={this.selectHeroes}>Heroes</button>
              <button  onClick={this.selectVilains}>Villains</button>
              </div>
              <Box characters={characters}/>
            </div>
          )
      
  }
}

const mapStateToProps = (state) => ({
  character : state.characters.result
})

export default connect(mapStateToProps, {getHeroes, getVilains})(Characters)