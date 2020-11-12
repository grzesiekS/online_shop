import Axios from 'axios';

/* SELECTORS */

export const getGenresData = ({genres}) => genres.data !== undefined ? genres.data : [];
export const getSelectedGenres = ({genres}) => genres.selected !== undefined ? genres.selected : [];
export const filterGenresArray = ({genres}, genresArray = []) => genres.data !== undefined
  ?
  genres.data.filter(genre => genresArray.indexOf(genre._id) !== -1)
  :
  [];
export const getGenresLoadingData = ({genres}) => genres.loading;

/* ACTIONS */

// action name creator
const reducerName = 'genres';
const createActionName = name => `app/${reducerName}/${name}`;

// Action types
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const SELECT_GENRES = createActionName('SELECT_GENRES');

// action creators
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const selectGenres = payload => ({ payload, type: SELECT_GENRES});

/* thunk creators */
export const fetchAllGenres = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios
      .get('http://localhost:8000/api/genres')
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
        data: action.payload,
        selected: [],
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
    case SELECT_GENRES:
      if(statePart.selected.indexOf(action.payload) !== -1) {
        return {
          ...statePart,
          selected: statePart.selected.filter(select => select !== action.payload),
        };
      } else {
        return {
          ...statePart,
          selected: [
            ...statePart.selected,
            action.payload,
          ],
        };
      }
    default:
      return statePart;
  }
}
