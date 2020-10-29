import React from 'react';
import PropTypes from 'prop-types';

import styles from './Game.module.scss';

const Game = ({name, images, price, ...otherProps}) => {

  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
    <div className={styles.container}>
      <div className={styles.game}>
        <img src={randomImage} alt='Game' />
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.price}>price start from <span className={styles.highlight}>{price} €</span></p>
      </div>
    </div>
  );
};

Game.propTypes = {
  name: PropTypes.string,
  images: PropTypes.array,
  price: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default Game;
