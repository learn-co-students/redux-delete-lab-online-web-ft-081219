import uuid from "uuid"
export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      return { bands: [...state.bands, {...action, id: uuid()}] };
     case "DELETE_BAND": return {bands: [...state.bands].filter(e => e.id !== action.id )};
    default:
      return {...state};
  }
};
