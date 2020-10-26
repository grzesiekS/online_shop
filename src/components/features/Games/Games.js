import React from 'react';

import styles from './Games.module.scss';

const Games = () => (
  <div className={styles.container}>
    <div className={styles.options}>
      <h2>Options</h2>
    </div>
    <div className={styles.games}>
      <h2>Games</h2>
    </div>
  </div>
);

export default Games;
