import {connect} from 'react-redux';

import {
  getGamesInCartGameExtend,
  getGamesInCart,
  getTotalPrice,
  changeDescGameCart,
  addToQty,
  substractFromQty,
  updatePrice,
  deleteGameFromCart }
  from '../../../redux/cartDataRedux';
import {fetchSelectedGame} from '../../../redux/gamesRedux';

import CartItems from './CartItems';

const mapStateToProps = state => ({
  gamesInCart: getGamesInCartGameExtend(state),
  totalPrice: getTotalPrice(state),
  getGamesInCartShort: getGamesInCart(state),
});

const mapDispatchToProps = dispatch => ({
  changeDesc: (id, desc) => dispatch(changeDescGameCart({id, desc})),
  addToQty: id => dispatch(addToQty({id})),
  substractFromQty: id => dispatch(substractFromQty({id})),
  updatePrice: (id, newPrice) => dispatch(updatePrice({id, newPrice})),
  deleteGame: id => dispatch(deleteGameFromCart({id})),
  fetchSelectedGame: id => dispatch(fetchSelectedGame(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItems);
