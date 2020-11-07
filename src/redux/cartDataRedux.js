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
const ADD_TO_QUANTITY = createAciotnName('ADD_TO_QUANTITY');
const SUBSTRACT_TO_QUANTITY = createAciotnName('SUBSTRACT_TO_QUANTITY');
const UPDATE_PRICE = createAciotnName('UPDATE_PRICE');

// Action creators
export const addGameToCart = payload => ({shortid, ...payload, type: ADD_GAME_TO_CART});
export const changeActiveCartForm = () => ({type: ONOFF_CART_FORM});
export const changeDescGameCart = payload => ({...payload, type: CHANGE_DESC_GAME_IN_CART});
export const addToQty = payload => ({...payload, type: ADD_TO_QUANTITY});
export const substractFromQty = payload => ({...payload, type: SUBSTRACT_TO_QUANTITY});
export const updatePrice = payload => ({...payload, type: UPDATE_PRICE});

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
    case ADD_TO_QUANTITY:
      return {
        ...statePart,
        orderDetails: {
          ...statePart.orderDetails,
          gamesInCart: statePart.orderDetails.gamesInCart.map(game => {
            if (game.id === action.id) {
              return (
                {
                  ...game,
                  quantity: game.quantity + 1,
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
    case SUBSTRACT_TO_QUANTITY:
      return {
        ...statePart,
        orderDetails: {
          ...statePart.orderDetails,
          gamesInCart: statePart.orderDetails.gamesInCart.map(game => {
            if (game.id === action.id && game.quantity > 1) {
              return (
                {
                  ...game,
                  quantity: game.quantity - 1,
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
    case UPDATE_PRICE:
      console.log(action);
      return {
        ...statePart,
        orderDetails: {
          ...statePart.orderDetails,
          gamesInCart: statePart.orderDetails.gamesInCart.map(game => {
            if (game.id === action.id) {
              return (
                {
                  ...game,
                  price: action.newPrice,
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
