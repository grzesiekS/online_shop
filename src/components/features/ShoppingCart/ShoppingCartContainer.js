import {connect} from 'react-redux';

import {changeActiveCartForm} from '../../../redux/cartDataRedux';

import ShoppingCart from './ShoppingCart';

const mapDispatchToProps = dispatch => ({
  changeActiveStatusCart: () => dispatch(changeActiveCartForm()),
});

export default connect(null, mapDispatchToProps)(ShoppingCart);
