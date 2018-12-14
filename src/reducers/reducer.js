import * as constants from '../actions/constants';

const initialState = {title: 'Races', names: [], locations: []};


export default (state=initialState, action) => {
  switch(action.type) {
    case constants.GET_NAMES:
      return {...state, names: [...action.names]}
    case constants.GET_LOCATIONS:
      return {...state, locations: [...action.locations]}
    default:
      return state; 
  }
}