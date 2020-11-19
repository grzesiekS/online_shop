import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './CartItems.module.scss';
import NumberInput from '../NumberInput/NumberInput';
import ArrowIcon from '../../common/ArrowIcon/ArrowIcon';
import Button from '../../common/Button/Button';
import Load from '../../common/Load/Load';

class CartItems extends React.Component {
  state = {
    activeCarts: [],
    activePage: 0,
    productsOnPage: 4,
  }

  changeActivePage = pageNo => {
    this.setState({
      ...this.state,
      activePage: pageNo,
    });
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

  increasePrice = (cartId, gamePrice, qty) => {
    const newPrice = gamePrice * (qty + 1);

    this.props.addToQty(cartId);
    this.props.updatePrice(cartId, newPrice);
  }

  reducePrice = (cartId, gamePrice, actualPrice, qty) => {
    if(qty > 1) {
      const newPrice = actualPrice - gamePrice;

      this.props.substractFromQty(cartId);
      this.props.updatePrice(cartId, newPrice);
    }
  }

  componentDidMount() {
    if(this.props.getGamesInCartShort.length > 0) {
      let gameError = false;
      this.props.gamesInCart.forEach(gameInCart => {
        if(gameInCart.game === undefined) gameError = true;
      });
      if(gameError) {
        this.props.getGamesInCartShort.forEach(gameInCart => {
          this.props.fetchSelectedGame(gameInCart.game);
        });
      }
    }

    const numberOfPages = Math.ceil(this.props.gamesInCart.length / this.state.productsOnPage);

    if(this.state.activePage > numberOfPages - 1 && this.props.gamesInCart.length > 0) {
      this.changeActivePage(0);
    }
  }

  render() {

    const {gamesInCart, totalPrice, changeDesc, deleteGame} = this.props;

    const pagesCount = Math.ceil(gamesInCart.length / this.state.productsOnPage);

    const dots = [];

    for(let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={i}>
          <Button
            Type='div'
            className='icon'
            onClick={() => this.changeActivePage(i)}
          >
            <FontAwesomeIcon  icon={faCircle} className={this.state.activePage === i ? clsx(styles.dotIcon, styles.active) : styles.dotIcon} />
          </Button>
        </li>
      );
    }

    return (
      <div className={styles.container}>
        {gamesInCart
          .slice(this.state.activePage * this.state.productsOnPage, (this.state.activePage + 1) * this.state.productsOnPage)
          .map(gameInCart => (
            gameInCart.game === undefined
              ?
              <Load key={gamesInCart.indexOf(gameInCart)} />
              :
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
                  <div className={styles.funcButtons}>
                    <Button
                      Type='div'
                      className='icon'
                      onClick={() => deleteGame(gameInCart.id)}
                    >
                      <FontAwesomeIcon icon={faTrash} className={styles.trashIcon} />
                    </Button>
                    <NumberInput
                      qty={gameInCart.quantity}
                      className='alignRight'
                      plusAction={() => this.increasePrice(gameInCart.id, gameInCart.game.price, gameInCart.quantity)}
                      minusAction={() => this.reducePrice(gameInCart.id, gameInCart.game.price, gameInCart.price, gameInCart.quantity)}
                    />
                  </div>
                </div>
              </div>
          ))}
        <ul className={styles.dots}>
          {dots.map(dot => (
            dot
          ))}
        </ul>
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
  updatePrice: PropTypes.func,
  deleteGame: PropTypes.func,
  getGamesInCartShort: PropTypes.array,
  fetchSelectedGame: PropTypes.func,
};

CartItems.defaultProps = {
  gamesInCart: [],
};

export default CartItems;
