import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import mainData from '../data/main.json';
import cartData from '../data/cartData.json';
import promptInfoData from '../data/promptInfo.json';

import globalReducer from './globalRedux';
import mainReducer from './mainRedux';
import genresReducer from './genresRedux';
import gamesReducer from './gamesRedux';
import cartDataReducer from './cartDataRedux';
import promptInfoReducer from './promptInfoRedux';
import newReleasesReducer from './newReleasesRedux';

const initialState = {
  main: mainData,
  cartData: cartData,
  promptInfo: promptInfoData,
};

// define reducers
const reducers = {
  main: mainReducer,
  genres: genresReducer,
  games: gamesReducer,
  cartData: cartDataReducer,
  promptInfo: promptInfoReducer,
  newReleases: newReleasesReducer,
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
  composeWithDevTools(
    applyMiddleware(thunk)
  ),
);

export default store;
