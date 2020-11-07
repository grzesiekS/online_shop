import {connect} from 'react-redux';

import { getGamesInCartGameExtend, getTotalPrice, changeDescGameCart } from '../../../redux/cartDataRedux';

import CartItems from './CartItems';

const mapStateToProps = state => ({
  gamesInCart: getGamesInCartGameExtend(state),
  totalPrice: getTotalPrice(state),
});

const mapDispatchToProps = dispatch => ({
  changeDesc: (id, desc) => dispatch(changeDescGameCart({id, desc})),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItems);
