import uuid from 'uuid'

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      // debugger
      console.log(state)
      const band = {name: action.name, id: uuid()}
      // const band = {name: action.name, id: Math.random()*10000000000000000}
      // return { ...state, bands: [...state.bands, band] }
      return {bands: state.band.concat(band)}
    case 'DELETE_BAND': 
      console.log(state)
      return {bands: state.bands.filter(band => band.id !== action.bandId)}
    // case 'DELETE_BAND':
    //   const bands = state.bands.filter(band => band.id !== action.bandId);
    //   return { bands };
    default:
      return state;
  }
};
