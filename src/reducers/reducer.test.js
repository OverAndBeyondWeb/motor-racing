import reducer from './reducer';
import * as constants from '../actions/constants';

test('reducer will provide the names from the store', () => {
  const names = ['John', 'Ralph'];

  expect(reducer(undefined, {type: constants.GET_NAMES, names})).toEqual({title: 'Races', names, locations: []});
});