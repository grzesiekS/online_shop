import React from 'react';
import PropTypes from 'prop-types';

import styles from './Games.module.scss';

import Option from '../Option/Option';

const Games = props => (
  <div className={styles.container}>
    <div className={styles.options}>
      <Option type='checkboxes' name='Genres' values={props.genres} />
    </div>
    <div className={styles.games}>
      <h2>Games</h2>
    </div>
  </div>
);

Games.propTypes = {
  genres: PropTypes.array,
};

export default Games;
