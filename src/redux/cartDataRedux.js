import shortid from 'shortid';

/* SELECTORS */
export const getOrderDetails = ({cartData}) => cartData.orderDetails;
export const getGamesInCart = ({cartData}) => cartData.orderDetails.gamesInCart;
export const getActiveCartFormOptions = ({cartData}) => cartData.cartFormOptions.active;
export const getGamesInCartGameExtend = ({cartData, games}) => cartData.orderDetails.gamesInCart.map(gameCart => (
  {
    ...gameCart,
    game: games.data.filter(game => (game._id === gameCart.game))[0],
  }
));
export const getTotalPrice = ({cartData}) => cartData.orderDetails.gamesInCart.map(gameCart => (
  gameCart.price
)).reduce((a, b) => a + b, 0);

/* ACTIONS */

// action name creator
const reducerName = 'cartData';
const createAciotnName = name => `app/${reducerName}/${name}`;

// Action types
const ADD_GAME_TO_CART = createAciotnName('ADD_GAME_TO_CART');
const ONOFF_CART_FORM = createAciotnName('ONOFF_CART_FORM');
const CHANGE_DESC_GAME_IN_CART = createAciotnName('CHANGE_DESC_GAME_IN_CART');

// Action creators
export const addGameToCart = payload => ({shortid, ...payload, type: ADD_GAME_TO_CART});
export const changeActiveCartForm = () => ({type: ONOFF_CART_FORM});
export const changeDescGameCart = payload => ({...payload, type: CHANGE_DESC_GAME_IN_CART});

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
              id: action.shortid(),
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
    case CHANGE_DESC_GAME_IN_CART:
      console.log(statePart);
      return {
        ...statePart,
        orderDetails: {
          ...statePart.orderDetails,
          gamesInCart: statePart.orderDetails.gamesInCart.map(game => {
            if (game.id === action.id) {
              return (
                {
                  ...game,
                  description: action.desc,
                }
              );
            } else {
              return (
                {
                  ...game,
                }
              );
            }
          }),
        },
      };
    default:
      return statePart;
  }
}
