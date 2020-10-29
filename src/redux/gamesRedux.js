/* SELECTORS */

export const getGamesData = ({games}) => games.data;
export const getRandomGameImage = ({games}) => games.data.photos[Math.floor(Math.random() * games.data.photos.length)];

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
