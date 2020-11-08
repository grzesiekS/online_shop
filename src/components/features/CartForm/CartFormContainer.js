import {connect} from 'react-redux';

import {changeActiveCartForm, getOrderDetails, updateOrderDetails} from '../../../redux/cartDataRedux';

import CartForm from './CartForm';

const mapStateToProps = state => ({
  name: getOrderDetails(state).name,
  lastname: getOrderDetails(state).lastname,
  email: getOrderDetails(state).email,
  phone: getOrderDetails(state).phone,
});

const mapDispatchToProps = dispatch => ({
  changeActiveStatusCart: () => dispatch(changeActiveCartForm()),
  updateOrderDetails: (key, value) => dispatch(updateOrderDetails({key, value})),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartForm);
