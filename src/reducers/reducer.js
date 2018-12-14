import * as constants from '../actions/constants';

export default (state, action) => {
  switch(action.type) {
    case constants.TEST_ACTION:
      return {count: action.count}
    default:
      return state; 
  }
}