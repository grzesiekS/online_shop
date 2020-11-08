import {connect} from 'react-redux';

import {changeActiveCartForm, getOrderDetails, updateOrderDetails, getGamesInCart} from '../../../redux/cartDataRedux';
import {changePromptStatus} from '../../../redux/promptInfoRedux';

import CartForm from './CartForm';

const mapStateToProps = state => ({
  name: getOrderDetails(state).name,
  lastname: getOrderDetails(state).lastname,
  email: getOrderDetails(state).email,
  phone: getOrderDetails(state).phone,
  gamesInCartCount: getGamesInCart(state).length,
});

const mapDispatchToProps = dispatch => ({
  changeActiveStatusCart: () => dispatch(changeActiveCartForm()),
  updateOrderDetails: (key, value) => dispatch(updateOrderDetails({key, value})),
  changePromptStatus: status => dispatch(changePromptStatus({status})),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartForm);
