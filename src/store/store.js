import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/reducer.js';
import thunk from 'redux-thunk';


export const store = createStore(reducer, applyMiddleware(thunk));
