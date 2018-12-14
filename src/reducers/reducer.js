import * as constants from '../actions/constants';

const initialState = {title: 'Races', names: [], locations: []};


export default (state=initialState, action) => {
  switch(action.type) {
    case constants.TEST_ACTION:
      return {count: action.count}
    default:
      return state; 
  }
}