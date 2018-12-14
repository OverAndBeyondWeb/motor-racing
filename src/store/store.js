import { createStore } from 'redux';
import reducer from '../reducers/reducer.js';

const initialState = {title: 'Races'};

export const store = createStore(reducer, initialState);