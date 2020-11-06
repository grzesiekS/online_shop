import React from 'react';

import styles from './CartItems.module.scss';

class CartItem extends React.Component {
  render() {
    return (
      <div className={styles.cartItem}>
        <h1>Cart Items</h1>
      </div>
    );
  }
}

export default CartItem;
