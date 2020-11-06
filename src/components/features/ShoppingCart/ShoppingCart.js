import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import styles from './ShoppingCart.module.scss';
import Button from '../../common/Button/Button';

const ShoppingCart = ({changeActiveStatusCart}) => {
  return (
    <div className={styles.shoppingCart}>
      <Button Type='div' className='icon' onClick={() => changeActiveStatusCart()}>
        <FontAwesomeIcon icon={faShoppingCart} className={styles.icon} />
      </Button>
      <div className={styles.counter}>0</div>
    </div>
  );
};

ShoppingCart.propTypes = {
  changeActiveStatusCart: PropTypes.func,
};

export default ShoppingCart;
