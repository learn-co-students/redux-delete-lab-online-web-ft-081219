import React, { Component } from 'react';
import { connect } from 'react-redux'

class Band extends Component {
 
  handleDelete = () => {
    console.log(this.props)

    this.props.removeBand( this.props.band.id)
  }
  render() {
    return(
      
      <li>
      {this.props.band.name}
        <button onClick={this.handleDelete}>Delete</button>

      </li>
    );
  }
};

export default Band
