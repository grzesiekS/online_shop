import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import styles from './CartForm.module.scss';
import Button from '../../common/Button/Button';
import CartItems from '../../features/CartItems/CartItemsContainer';


class CartForm extends React.Component {

  submitForm = () => {
    if(this.props.name
      && this.props.lastname
      && this.props.email
      && this.props.phone
      && this.props.gamesInCartCount
      && this.props.email.split('@').length === 2) {
      this.props.changePromptStatus('success');
      this.props.addNewOrder(this.props.orderDetails);
    } else {
      this.props.changePromptStatus('error');
    }
  }

  componentDidUpdate() {
    this.props.saveCartToLocalStorage(this.props.orderDetails);
  }

  render() {

    return (
      <div className={styles.cart}>
        <div className={styles.closeWindow}>
          <Button Type='div' className='icon' onClick={() => this.props.changeActiveStatusCart()}>
            <FontAwesomeIcon icon={faTimes} className={styles.icon} />
          </Button>
        </div>
        <h1 className={styles.title}>Your order</h1>
        <CartItems />
        <form className={styles.cartForm}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={this.props.name}
            onChange={e =>
              this.props.updateOrderDetails(
                Object.keys(this.props).find(key => this.props[key] === this.props.name),
                e.currentTarget.value
              )}
            required='required'
          />
          <label htmlFor="lastname">Last Name</label>
          <input
            id="lastname"
            type="text"
            value={this.props.lastname}
            onChange={e =>
              this.props.updateOrderDetails(
                Object.keys(this.props).find(key => this.props[key] === this.props.lastname),
                e.currentTarget.value
              )}
            required='required'
          />
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            value={this.props.email}
            onChange={e =>
              this.props.updateOrderDetails(
                Object.keys(this.props).find(key => this.props[key] === this.props.email),
                e.currentTarget.value
              )}
            required='required'
          />
          <label htmlFor="phone">Phone No.</label>
          <input
            id="phone"
            type="tel"
            value={this.props.phone}
            onChange={e =>
              this.props.updateOrderDetails(
                Object.keys(this.props).find(key => this.props[key] === this.props.phone),
                e.currentTarget.value
              )}
            required='required'
          />
          <Button
            Type='div'
            onClick={() => this.submitForm()}
          >
            Order Now
          </Button>
        </form>
      </div>
    );
  }
}

CartForm.propTypes = {
  changeActiveStatusCart: PropTypes.func,
  name: PropTypes.string,
  lastname: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  updateOrderDetails: PropTypes.func,
  changePromptStatus: PropTypes.func,
  gamesInCartCount: PropTypes.number,
  saveCartToLocalStorage: PropTypes.func,
  orderDetails: PropTypes.object,
  loadCartFromLocalStorage: PropTypes.func,
  addNewOrder: PropTypes.func,
};

export default CartForm;
