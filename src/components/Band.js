import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <li>
        <p>{this.props.name}</p>
        <button onClick={() => this.props.delete(this.props.id)}>delete</button>
      </li>
    );
  }
};

export default Band;
