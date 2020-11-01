import React from 'react';
import PropTypes from 'prop-types';

import styles from './GameForm.module.scss';

const GameForm = ({description, price}) => (
  <div className={styles.container}>
    <p className={styles.description}>{description}</p>
    <p className={styles.price}>Price: {price} €</p>
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
};

export default GameForm;
