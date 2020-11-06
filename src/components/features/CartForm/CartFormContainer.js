import {connect} from 'react-redux';

import {changeActiveCartForm} from '../../../redux/cartDataRedux';

import CartForm from './CartForm';

const mapDispatchToProps = dispatch => ({
  changeActiveStatusCart: () => dispatch(changeActiveCartForm()),
});

export default connect(null, mapDispatchToProps)(CartForm);
