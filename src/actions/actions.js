import * as constants from './constants';

export const testAction = (data) => {
  return {type: constants.TEST_ACTION, count: data};
}

export const getDataFromApi = () => {
  return {type: constants.GET_DATA}
}