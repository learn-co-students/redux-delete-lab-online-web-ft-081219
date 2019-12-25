import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band'

import { connect } from 'react-redux'

class BandsContainer extends Component {
  

  display_bands = () =>{ console.log("=====");console.log(this.props); return (this.props.bands.map(e => <Band removeBand={this.props.removeBand}  key={e.id}  band={e}/>  ) )}
  render() {
    return (
      <ul>
        {this.display_bands()} 

        <BandInput  addBand={this.props.addBand}/>

      </ul>
    )
  }
}

const mapStateToProps = (state) => ({ bands: state.bands })

const mapDispatchToProps = dispatch => ({
  
  addBand: name => {  return dispatch({ type: "ADD_BAND", name: name })},
  removeBand: id => {  return dispatch({ type: "DELETE_BAND", id: id })}
})

export default connect(mapStateToProps,mapDispatchToProps)(BandsContainer)
