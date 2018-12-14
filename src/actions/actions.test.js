import * as constants from './constants';
import * as actions from './actions';

test('creates an action to set names in the store', () => {
  const names = [];

  expect(actions.getRaceNames(names)).toEqual({type: constants.GET_NAMES, names});
});

test('creates an action to set locations in the store', () => {
  const locations = [];

  expect(actions.getRaceLocations(locations)).toEqual({type: constants.GET_LOCATIONS, locations});
});