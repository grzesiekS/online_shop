import React from 'react';

import TopBar from '../TopBar/TopBar';
import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.root}>
    <TopBar />
  </header>
);

export default Header;
