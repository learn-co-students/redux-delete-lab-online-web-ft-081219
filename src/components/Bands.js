import React, { Component } from 'react'
import Band from './Band'

export default class Bands extends Component {
  render() {
    return (
      <div>
        {this.props.bands.map(band => 
          <Band name={band.name} id={band.id} key={band.id} deleteBand={this.props.deleteBand}/>
        )}
      </div>
    )
  }
}