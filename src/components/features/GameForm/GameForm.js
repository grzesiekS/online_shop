import React from 'react';
import PropTypes from 'prop-types';

import styles from './GameForm.module.scss';

import Button from '../../common/Button/Button';
import PhotoCarousel from '../../features/PhotoCarousel/PhotoCarousel';

const GameForm = ({_id, description, price, genres, photos, addToCart}) => (
  <div className={styles.container}>
    <p>Genres:</p>
    <ul className={styles.genreList}>
      {genres.map(genre => (
        <li key={genre._id}>{genre.name}</li>
      ))}
    </ul>
    <p className={styles.description}>{description}</p>
    <PhotoCarousel photos={photos} />
    <p className={styles.price}>Price: {price} €</p>
    <Button Type='div' className='alignRight' onClick={() => addToCart(_id, price, 1)}>Buy it now</Button>
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
  photos: PropTypes.array,
  addToCart: PropTypes.func,
  _id: PropTypes.string,
};

GameForm.defaultProps = {
  genres: [],
};

export default GameForm;
