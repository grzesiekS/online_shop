/* SELECTORS */
export const getOrderDetails = ({cartData}) => cartData.orderDetails;
export const getGamesInCart = ({cartData}) => cartData.orderDetails.gamesInCart;
export const getActiveCartFormOptions = ({cartData}) => cartData.cartFormOptions.active;

/* ACTIONS */

// action name creator
const reducerName = 'cartData';
const createAciotnName = name => `app/${reducerName}/${name}`;

// Action types
const ADD_GAME_TO_CART = createAciotnName('ADD_GAME_TO_CART');

// Action creators
export const addGameToCart = payload => ({...payload, type: ADD_GAME_TO_CART});

//reducer
export default function reducer(statePart = [], action =[]) {
  switch(action.type) {
    case ADD_GAME_TO_CART:
      return {
        ...statePart,
        orderDetails: {
          ...statePart.orderDetails,
          gamesInCart: [
            ...statePart.orderDetails.gamesInCart,
            {
              game: action.id,
              price: action.price,
              quantity: action.qty,
              description: '',
            },
          ],
        },
      };
    default:
      return statePart;
  }
}
