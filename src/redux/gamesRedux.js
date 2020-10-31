/* SELECTORS */

export const getGamesData = ({games}) => games.data;
export const getSelectedGame = ({games}, id) => games.data.filter(game => game._id === id)[0];

/* ACTIONS */

// action name creator
// const reducerName = 'games';
// const createActionName = name => `app/${reducerName}/${name}`;

// Action types

// action creators

//reducer
export default function reducer(statePart = [], action ={}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
