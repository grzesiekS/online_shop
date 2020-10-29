import React from 'react';
import PropTypes from 'prop-types';

import styles from './Games.module.scss';

import Option from '../Option/Option';
import Game from '../Game/Game';

const Games = props => (
  <div className={styles.container}>
    <div className={styles.options}>
      <Option
        type='checkboxes'
        name='Genres'
        values={props.genres}
        currentValue={props.selectedGenres}
        setOptionValue= {props.selectGenres}
      />
    </div>
    <div className={styles.games}>
      <h2 className={styles.title}>Games</h2>
      <div className={styles.flexBox}>
        {props.games.map(game => (
          <Game key={game._id} name={game.name} price={game.price} images={game.photos} />
        ))}
      </div>
    </div>
  </div>
);

Games.propTypes = {
  genres: PropTypes.array,
  selectedGenres: PropTypes.array,
  selectGenres: PropTypes.func,
  games: PropTypes.array.isRequired,
};

export default Games;
