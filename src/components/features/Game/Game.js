import React from 'react';
import PropTypes from 'prop-types';

import styles from './Game.module.scss';

const Game = ({name, image, price, ...otherProps}) => (
  <div className={styles.container}>
    <div className={styles.game}>
      <h2 className={styles.title}>{name}</h2>
      <img src={image} alt='Game' />
      <p className={styles.price}>{price} €</p>
    </div>
  </div>
);

Game.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default Game;
