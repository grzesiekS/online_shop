import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './CartItems.module.scss';
import NumberInput from '../NumberInput/NumberInput';
import ArrowIcon from '../../common/ArrowIcon/ArrowIcon';

class CartItems extends React.Component {
  state = {
    activeCarts: [],
  }

  changeActiveState = (cartId) => {
    this.setState({
      ...this.state,
      activeCarts:
        this.state.activeCarts.indexOf(cartId) !== -1
          ?
          this.state.activeCarts.filter(activeCart => activeCart !== cartId)
          :
          [
            ...this.state.activeCarts,
            cartId,
          ],
    });
  }

  render() {

    const {gamesInCart, totalPrice, changeDesc, addToQty, substractFromQty} = this.props;

    return (
      <div className={styles.container}>
        {gamesInCart.map(gameInCart => (
          <div
            key={gamesInCart.indexOf(gameInCart)}
            className={styles.cartItem}
          >
            <p className={styles.name}>{gameInCart.game.name}</p>
            <p className={styles.qty}>QTY: {gameInCart.quantity}</p>
            <p className={styles.price}>{gameInCart.price} €</p>
            <div className={styles.arrowIcon}>
              <ArrowIcon
                className={this.state.activeCarts.indexOf(gameInCart.id) !== -1 ? 'active' : null}
                clickHandler={() => this.changeActiveState(gameInCart.id)}
              />
            </div>
            <div
              className={
                this.state.activeCarts.indexOf(gameInCart.id) !== -1
                  ?
                  clsx(styles.orderDetails, styles.active)
                  :
                  styles.orderDetails }
            >
              <label htmlFor='description'>Short Game Description:</label>
              <textarea
                id='description'
                className={styles.description}
                value={gameInCart.description}
                onChange={e => changeDesc(gameInCart.id ,e.currentTarget.value)}
              />
              <NumberInput
                qty={gameInCart.quantity}
                className='alignRight'
                plusAction={() => addToQty(gameInCart.id)}
                minusAction={() => substractFromQty(gameInCart.id)}
              />
            </div>
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
  changeDesc: PropTypes.func,
  addToQty: PropTypes.func,
  substractFromQty: PropTypes.func,
};

export default CartItems;
