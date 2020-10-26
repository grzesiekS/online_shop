import React from 'react';
import styles from './Splash.module.scss';

const Splash = () => (
  <section className={styles.splash}>
    <div className={styles.container}>
      <h1 className={styles.title}>Games for life</h1>
    </div>
    <img className={styles.image} src='./images/splash_img.jpg' alt='play the game'/>
  </section>
);

export default Splash;
