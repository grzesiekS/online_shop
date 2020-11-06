import React from 'react';
import PropTypes from 'prop-types';

import styles from './CartItems.module.scss';

class CartItems extends React.Component {
  render() {

    const {gamesInCart, totalPrice} = this.props;

    return (
      <div className={styles.cartItem}>
        {gamesInCart.map(gameInCart => (
          <div key={gamesInCart.indexOf(gameInCart)}>
            <p className={styles.name}>{gameInCart.game.name}</p>
            <p className={styles.qty}>QTY: {gameInCart.quantity}</p>
            <p className={styles.price}>{gameInCart.price} €</p>
          </div>
        ))}

        <div className={styles.totalPrice}>
          <h2>Total price:</h2>
          <h2 className={styles.subtitle}>{totalPrice} €</h2>
        </div>
      </div>
    );
  }
}

CartItems.propTypes = {
  gamesInCart: PropTypes.array,
  totalPrice: PropTypes.number,
};

export default CartItems;
