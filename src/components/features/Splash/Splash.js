import React from 'react';
import PropTypes from 'prop-types';

import styles from './Splash.module.scss';

const Splash = ({title, image, children}) => (
  <section className={styles.splash}>
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </div>
    <img className={styles.image} src={image} alt='play the game'/>
  </section>
);

Splash.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  image: PropTypes.string,
};

export default Splash;
