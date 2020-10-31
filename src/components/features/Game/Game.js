import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Game.module.scss';

const Game = ({name, images, price, id}) => {

  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
    <div className={styles.container}>
      <Link to={`/game/${id}`}>
        <div className={styles.game}>
          <img src={randomImage} alt='Game' />
          <h2 className={styles.title}>{name}</h2>
          <p className={styles.price}>price start from <span className={styles.highlight}>{price} €</span></p>
        </div>
      </Link>
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
  id: PropTypes.string,
};

export default Game;
