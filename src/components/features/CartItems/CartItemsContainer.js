import {connect} from 'react-redux';

import { getGamesInCartGameExtend, getTotalPrice } from '../../../redux/cartDataRedux';

import CartItems from './CartItems';

const mapStateToProps = state => ({
  gamesInCart: getGamesInCartGameExtend(state),
  totalPrice: getTotalPrice(state),
});

export default connect(mapStateToProps)(CartItems);
