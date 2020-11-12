import Axios from 'axios';

/* SELECTORS */

export const getGamesData = ({games}) => games.data !== undefined ? games.data : [];
export const getSelectedGame = ({games}, id) => games.data !== undefined
  ?
  games.data.filter(game => game._id === id)[0]
  :
  {};
export const filterGamesByGenres = ({games, genres}) => games.data !== undefined
  ?
  games.data.filter(game => (
    game.description.toUpperCase().includes(games.searchValue.toUpperCase())
  ||
  game.name.toUpperCase().includes(games.searchValue.toUpperCase())
  )).filter(game => {
    let containStatus = false;

    game.genres.forEach(gameGenres => {
      if(genres.selected.indexOf(gameGenres) !== -1) containStatus = true;
    });

    return containStatus;
  })
  :
  [];
export const getSearchValue = ({games}) => games.searchValue;
export const getSearchedGames = ({games}) => games.data !== undefined
  ?
  games.data.filter(game => (
    game.description.toUpperCase().includes(games.searchValue.toUpperCase())
    ||
    game.name.toUpperCase().includes(games.searchValue.toUpperCase())
  ))
  :
  [];
export const getGamesLoadingData = ({games}) => games.loading;

/* ACTIONS */

// action name creator
const reducerName = 'games';
const createActionName = name => `app/${reducerName}/${name}`;

// Action types
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const CHANGE_SEARCH_VALUE = createActionName('CHANGE_SEARCH_VALUE');

// action creators
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const changeSearchValue = payload => ({...payload, type: CHANGE_SEARCH_VALUE});

/* thunk creators */
export const fetchAllGames = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios
      .get('http://localhost:8000/api/games')
      .then(res => {
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || false));
      });
  };
};

export const fetchSelectedGame = (id) => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios
      .get(`http://localhost:8000/api/games/${id}`)
      .then(res => {
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || false));
      });
  };
};

//reducer
export default function reducer(statePart = [], action ={}) {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: Array.isArray(action.payload) ? action.payload : [action.payload],
        searchValue: '',
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case CHANGE_SEARCH_VALUE:
      return {
        ...statePart,
        searchValue: action.value,
      };
    default:
      return statePart;
  }
}
