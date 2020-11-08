/* SELECTORS */

export const getGamesData = ({games}) => games.data;
export const getSelectedGame = ({games}, id) => games.data.filter(game => game._id === id)[0];
export const filterGamesByGenres = ({games, genres}) => games.data.filter(game => (
  game.description.toUpperCase().includes(games.searchValue.toUpperCase())
  ||
  game.name.toUpperCase().includes(games.searchValue.toUpperCase())
)).filter(game => {
  let containStatus = false;

  game.genres.forEach(gameGenres => {
    if(genres.selected.indexOf(gameGenres) !== -1) containStatus = true;
  });

  return containStatus;
});
export const getSearchValue = ({games}) => games.searchValue;
export const getSearchedGames = ({games}) => games.data.filter(game => (
  game.description.toUpperCase().includes(games.searchValue.toUpperCase())
  ||
  game.name.toUpperCase().includes(games.searchValue.toUpperCase())
));

/* ACTIONS */

// action name creator
const reducerName = 'games';
const createActionName = name => `app/${reducerName}/${name}`;

// Action types
const CHANGE_SEARCH_VALUE = createActionName('CHANGE_SEARCH_VALUE');

// action creators
export const changeSearchValue = payload => ({...payload, type: CHANGE_SEARCH_VALUE});

//reducer
export default function reducer(statePart = [], action ={}) {
  switch (action.type) {
    case CHANGE_SEARCH_VALUE:
      return {
        ...statePart,
        searchValue: action.value,
      };
    default:
      return statePart;
  }
}
