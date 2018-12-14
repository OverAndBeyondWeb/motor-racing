import * as constants from './constants';
import axios from 'axios';

export const getDataFromApi = () => {
  return axios.get('http://ergast.com/api/f1/2018/circuits.json');
}

const getRaceNames = (raceNames) => {
  return {type: constants.GET_NAMES, names: raceNames};
}

const getRaceLocations = (raceLocations) => {
  return {type: constants.GET_LOCATIONS, locations: raceLocations};
}

export const fillStoreWithAPIData = () => {
  return dispatch => {
    return getDataFromApi().then(resp => {
      const names = resp.data.MRData.CircuitTable.Circuits.map(circuit => circuit.circuitName)
      const locations = resp.data.MRData.CircuitTable.Circuits.map(circuit => circuit.Location)
    
      dispatch(getRaceNames(names));
      dispatch(getRaceLocations(locations));

    });
  }
}