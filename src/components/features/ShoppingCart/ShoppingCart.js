import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import styles from './ShoppingCart.module.scss';
import Button from '../../common/Button/Button';

const ShoppingCart = () => {
  return (
    <div className={styles.shoppingCart}>
      <Button Type='div' className='icon'>
        <FontAwesomeIcon icon={faShoppingCart} className={styles.icon} />
      </Button>
      <div className={styles.counter}>0</div>
    </div>
  );
};

export default ShoppingCart;
