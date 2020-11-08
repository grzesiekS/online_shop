import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import styles from './CartForm.module.scss';
import Button from '../../common/Button/Button';
import CartItems from '../../features/CartItems/CartItemsContainer';

const CartForm = ({changeActiveStatusCart, updateOrderDetails, ...props}) => (
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
        value={props.name}
        onChange={e => updateOrderDetails(
          Object.keys(props).find(key => props[key] === props.name),
          e.currentTarget.value
        )}
      />
      <label htmlFor="lastname">Last Name</label>
      <input
        id="lastname"
        type="text"
        value={props.lastname}
        onChange={e => updateOrderDetails(
          Object.keys(props).find(key => props[key] === props.lastname),
          e.currentTarget.value
        )}
      />
      <label htmlFor="email">E-mail</label>
      <input
        id="email"
        type="email"
        value={props.email}
        onChange={e => updateOrderDetails(
          Object.keys(props).find(key => props[key] === props.email),
          e.currentTarget.value
        )}
      />
      <label htmlFor="phone">Phone No.</label>
      <input
        id="phone"
        type="tel"
        value={props.phone}
        onChange={e => updateOrderDetails(
          Object.keys(props).find(key => props[key] === props.phone),
          e.currentTarget.value
        )}
      />
      <Button Type="div" >Order Now</Button>
    </form>
  </div>
);

CartForm.propTypes = {
  changeActiveStatusCart: PropTypes.func,
  name: PropTypes.string,
  lastname: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  updateOrderDetails: PropTypes.func,
};

export default CartForm;
