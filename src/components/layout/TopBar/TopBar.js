import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faSearch } from '@fortawesome/free-solid-svg-icons';

import styles from './TopBar.module.scss';

const TopBar = () => (
  <div className={styles.container}>
    <nav>
      <ul className={styles.navigation}>
        <li>
          <a href='/#'>
            <FontAwesomeIcon icon={faGamepad} className={styles.logo} />
          </a>
        </li>
        <li>
          <a href='/#'>
            <FontAwesomeIcon icon={faSearch} className={styles.searchIcon}/>
            Search
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

export default TopBar;
