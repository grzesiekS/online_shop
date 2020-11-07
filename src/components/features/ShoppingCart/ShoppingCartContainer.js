import {connect} from 'react-redux';

import {changeActiveCartForm, getTotalQty} from '../../../redux/cartDataRedux';

import ShoppingCart from './ShoppingCart';

const mapStateToProps = state => ({
  totalQty: getTotalQty(state),
});

const mapDispatchToProps = dispatch => ({
  changeActiveStatusCart: () => dispatch(changeActiveCartForm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
