import {combineReducers, createStore} from 'redux';

import mainData from '../data/main.json';
import genresData from '../data/genres.json';

import globalReducer from './globalRedux';
import mainReducer from './mainRedux';

const initialState = {
  main: mainData,
  genres: genresData,
};

// define reducers
const reducers = {
  main: mainReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

// combine reducers
const combinedReducers = combineReducers(reducers);

// merge all reducers with globalReducer
const storeReducer = (state, action) => {
  const modifiedState = globalReducer(state, action);
  return combinedReducers(modifiedState, action);
};

// create store
const store = createStore(
  storeReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
