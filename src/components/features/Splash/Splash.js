import React from 'react';
import styles from './Splash.module.scss';

const Splash = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Games for life</h1>
    <img className={styles.image} src='./images/splash_img.jpg' alt='play the game'/>
  </div>
);

export default Splash;
