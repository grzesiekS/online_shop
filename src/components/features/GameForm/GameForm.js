import React from 'react';
import PropTypes from 'prop-types';

import styles from './GameForm.module.scss';

import Button from '../../common/Button/Button';

const GameForm = ({description, price, genres}) => (
  <div className={styles.container}>
    <p>Genres:</p>
    <ul className={styles.genreList}>
      {genres.map(genre => (
        <li key={genre._id}>{genre.name}</li>
      ))}
    </ul>
    <p className={styles.description}>{description}</p>
    <p className={styles.price}>Price: {price} €</p>
    <Button Type='div' className='alignRight'>Buy it now</Button>
  </div>
);

GameForm.propTypes = {
  description: PropTypes.string,
  price: PropTypes.oneOfType(
    [
      PropTypes.string,
      PropTypes.number,
    ]
  ),
  genres: PropTypes.array,
};

GameForm.defaultProps = {
  genres: [],
};

export default GameForm;
