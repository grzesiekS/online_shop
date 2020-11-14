import React from 'react';

import styles from './Load.module.scss';

const Load = () => (
  <div className={styles.container}>
    <div className={styles.flex}>
      <div id={styles.dot1} className={styles.dot}></div>
      <div id={styles.dot2} className={styles.dot}></div>
      <div id={styles.dot3} className={styles.dot}></div>
    </div>
    <h1>Loading...</h1>
  </div>
);

export default Load;
