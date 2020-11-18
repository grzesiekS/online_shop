import Axios from 'axios';
import {API_URL} from '../config';

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
export const getTotalQty = ({cartData}) => cartData.orderDetails.gamesInCart.map(gameCart => (
  gameCart.quantity
)).reduce((a, b) => a + b, 0);

/* ACTIONS */

// action name creator
const reducerName = 'cartData';
const createActionName = name => `app/${reducerName}/${name}`;

// Action types
const ADD_GAME_TO_CART = createActionName('ADD_GAME_TO_CART');
const ONOFF_CART_FORM = createActionName('ONOFF_CART_FORM');
const CHANGE_DESC_GAME_IN_CART = createActionName('CHANGE_DESC_GAME_IN_CART');
const ADD_TO_QUANTITY = createActionName('ADD_TO_QUANTITY');
const SUBSTRACT_TO_QUANTITY = createActionName('SUBSTRACT_TO_QUANTITY');
const UPDATE_PRICE = createActionName('UPDATE_PRICE');
const DELETE_GAME_FROM_CART = createActionName('DELETE_GAME_FROM_CART');
const UPDATE_ORDER_DETAILS = createActionName('UPDATE_ORDER_DETAILS');
const UPDATE_CART_FROM_LOCALSTORAGE = createActionName('UPDATE_CART_FROM_LOCALSTORAGE');
const FETCH_START = createActionName('FETCH_START');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const SET_DEFAULT_STATE = createActionName('SET_DEFAULT_STATE');

// Action creators
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const addGameToCart = payload => ({...payload, type: ADD_GAME_TO_CART});
export const changeActiveCartForm = () => ({type: ONOFF_CART_FORM});
export const changeDescGameCart = payload => ({...payload, type: CHANGE_DESC_GAME_IN_CART});
export const addToQty = payload => ({...payload, type: ADD_TO_QUANTITY});
export const substractFromQty = payload => ({...payload, type: SUBSTRACT_TO_QUANTITY});
export const updatePrice = payload => ({...payload, type: UPDATE_PRICE});
export const deleteGameFromCart = payload => ({...payload, type: DELETE_GAME_FROM_CART});
export const updateOrderDetails = payload => ({...payload, type: UPDATE_ORDER_DETAILS});
export const fetchCartDatafromLocalStorage = payload => ({payload, type: UPDATE_CART_FROM_LOCALSTORAGE});
export const setDefaultState = () => ({type: SET_DEFAULT_STATE});

/* thunk creator */
export const saveCartToLocalStorage = (state) => {
  return () => {
    try {
      const serialisedState = JSON.stringify(state);
      localStorage.setItem('cartData', serialisedState);
    } catch(err) {
      console.warn(err);
    }
  };
};

export const saveGameToLocalStorage = statePart => {
  return (dispatch) => {
    try {
      const serialisedData = JSON.parse(localStorage.getItem('cartData'));
      if (serialisedData !== null) {
        serialisedData.gamesInCart.push(statePart);
        dispatch(saveCartToLocalStorage(serialisedData));
      } else {
        dispatch(saveCartToLocalStorage({
          gamesInCart: [
            statePart,
          ],
        }));
      }
    } catch(err) {
      console.warn(err);
    }
  };
};

export const loadCartFromLocalStorage = () => {
  return (dispatch, getState) => {
    try {
      const serialisedState =  JSON.parse(localStorage.getItem('cartData'));
      if(serialisedState !== null) dispatch(fetchCartDatafromLocalStorage(serialisedState));
    } catch(err) {
      console.warn(err);
    }
  };
};

export const removeCartFromLocalStorage = () => {
  return () => {
    try {
      localStorage.removeItem('cartData');
    } catch(err) {
      console.warn(err);
    }
  };
};

export const addNewOrder = post => {
  return async dispatch => {
    dispatch(fetchStarted());

    try {
      await Axios.post(`${API_URL}/orders`, post);
      await new Promise((resolve) => resolve());
      dispatch(removeCartFromLocalStorage());
      dispatch(setDefaultState());
    } catch(e) {
      dispatch(fetchError(e.message || true));
    }
  };
};

//reducer
export default function reducer(statePart = [], action =[]) {
  switch(action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
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
    case SET_DEFAULT_STATE:
      return {
        ...statePart,
        orderDetails: {
          name: '',
          lastname: '',
          email: '',
          phone: '',
          gamesInCart: [],
        },
      };
    case UPDATE_CART_FROM_LOCALSTORAGE:
      return {
        ...statePart,
        orderDetails: action.payload,
      };
    case ADD_GAME_TO_CART:
      return {
        ...statePart,
        orderDetails: {
          ...statePart.orderDetails,
          gamesInCart: [
            ...statePart.orderDetails.gamesInCart,
            {
              id: action.gameInCartId,
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
    case DELETE_GAME_FROM_CART:
      return {
        ...statePart,
        orderDetails: {
          ...statePart.orderDetails,
          gamesInCart: statePart.orderDetails.gamesInCart.filter(game => game.id !== action.id),
        },
      };
    case UPDATE_ORDER_DETAILS:
      return {
        ...statePart,
        orderDetails: {
          ...statePart.orderDetails,
          [action.key]: action.value,
        },
      };
    default:
      return statePart;
  }
}
