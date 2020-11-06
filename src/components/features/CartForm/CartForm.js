import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import styles from './CartForm.module.scss';
import Button from '../../common/Button/Button';

const CartForm = () => (
  <div className={styles.cart}>
    <div className={styles.closeWindow}>
      <Button Type='div' className='icon'>
        <FontAwesomeIcon icon={faTimes} className={styles.icon} />
      </Button>
    </div>
    <h1 className={styles.title}>Your order</h1>
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

export default CartForm;
