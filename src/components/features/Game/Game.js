import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {randomImageSelection} from '../../../utils/randomImage';

import styles from './Game.module.scss';

const Game = ({name, images, price, id}) => {

  const rndImage = randomImageSelection(images);

  return (
    <div className={styles.container}>
      <Link to={`/game/${id}`}>
        <div className={styles.game}>
          <img src={rndImage} alt='Game' />
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
