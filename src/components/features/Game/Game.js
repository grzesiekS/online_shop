import React from 'react';
import PropTypes from 'prop-types';

import styles from './Game.module.scss';

const Game = ({name, images, price, ...otherProps}) => {

  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
    <div className={styles.container}>
      <div className={styles.game}>
        <h2 className={styles.title}>{name}</h2>
        <img src={randomImage} alt='Game' />
        <p className={styles.price}>{price} €</p>
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
