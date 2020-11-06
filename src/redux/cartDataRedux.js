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
const ONOFF_CART_FORM = createAciotnName('ONOFF_CART_FORM');

// Action creators
export const addGameToCart = payload => ({...payload, type: ADD_GAME_TO_CART});
export const changeActiveCartForm = () => ({type: ONOFF_CART_FORM});

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
    case ONOFF_CART_FORM:
      return {
        ...statePart,
        cartFormOptions: {
          ...statePart.cartFormOptions,
          active: !statePart.cartFormOptions.active,
        },
      };
    default:
      return statePart;
  }
}
