import {connect} from 'react-redux';

import {
  getGamesInCartGameExtend,
  getTotalPrice,
  changeDescGameCart,
  addToQty,
  substractFromQty,
  updatePrice }
  from '../../../redux/cartDataRedux';

import CartItems from './CartItems';

const mapStateToProps = state => ({
  gamesInCart: getGamesInCartGameExtend(state),
  totalPrice: getTotalPrice(state),
});

const mapDispatchToProps = dispatch => ({
  changeDesc: (id, desc) => dispatch(changeDescGameCart({id, desc})),
  addToQty: id => dispatch(addToQty({id})),
  substractFromQty: id => dispatch(substractFromQty({id})),
  updatePrice: (id, newPrice) => dispatch(updatePrice({id, newPrice})),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItems);
