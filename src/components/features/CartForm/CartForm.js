import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import styles from './CartForm.module.scss';
import Button from '../../common/Button/Button';
import CartItems from '../../features/CartItems/CartItemsContainer';

const CartForm = ({changeActiveStatusCart}) => (
  <div className={styles.cart}>
    <div className={styles.closeWindow}>
      <Button Type='div' className='icon' onClick={() => changeActiveStatusCart()}>
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
      />
      <label htmlFor="lastname">Last Name</label>
      <input
        id="lastname"
        type="text"
      />
      <label htmlFor="email">E-mail</label>
      <input
        id="email"
        type="email"
      />
      <label htmlFor="phone">Phone No.</label>
      <input
        id="phone"
        type="tel"
      />
      <Button Type="div" >Order Now</Button>
    </form>
  </div>
);

CartForm.propTypes = {
  changeActiveStatusCart: PropTypes.func,
};

export default CartForm;
