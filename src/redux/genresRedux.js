/* SELECTORS */

export const getGenresData = ({genres}) => genres.data;
export const getSelectedGenres = ({genres}) => genres.selected;

/* ACTIONS */

// action name creator
const reducerName = 'genres';
const createActionName = name => `app/${reducerName}/${name}`;

// Action types
const SELECT_GENRES = createActionName('SELECT_GENRES');

// action creators
export const selectGenres = payload => ({ payload, type: SELECT_GENRES});

//reducer
export default function reducer(statePart = [], action ={}) {
  switch (action.type) {
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
