import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faSearch } from '@fortawesome/free-solid-svg-icons';

import styles from './TopBar.module.scss';
import ShoppingCart from '../../features/ShoppingCart/ShoppingCartContainer';

const TopBar = () => (
  <div className={styles.container}>
    <nav>
      <ul className={styles.navigation}>
        <li>
          <Link to='/'>
            <FontAwesomeIcon icon={faGamepad} className={styles.logo} />
          </Link>
        </li>
        <li>
          <a href='/#'>
            <FontAwesomeIcon icon={faSearch} className={styles.searchIcon}/>
            Search
          </a>
        </li>
      </ul>
    </nav>
    <ShoppingCart />
  </div>
);

export default TopBar;
