import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faSearch } from '@fortawesome/free-solid-svg-icons';

import styles from './TopBar.module.scss';
import ShoppingCart from '../../features/ShoppingCart/ShoppingCartContainer';

class TopBar extends React.Component {
  state = {
    activeSearch: false,
  }

  changeActiveSearchState = () => {
    this.setState({
      ...this.state,
      activeSearch: !this.state.activeSearch,
    });
  }

  render () {
    return (
      <div className={styles.container}>
        <nav>
          <ul className={styles.navigation}>
            <li>
              <Link to='/'>
                <FontAwesomeIcon icon={faGamepad} className={styles.logo} />
              </Link>
            </li>
            <li>
              <input
                type='text'
                className={this.state.activeSearch ? clsx(styles.serachInput, styles.active) : styles.serachInput}
                disabled = {!this.state.activeSearch ? 'disabled' : null}
              />
              <a href='/#' onClick={e => {
                e.preventDefault();
                this.changeActiveSearchState();
              }}>
                <FontAwesomeIcon icon={faSearch} className={styles.searchIcon}/>
              </a>
            </li>
          </ul>
        </nav>
        <ShoppingCart />
      </div>
    );
  }
}

export default TopBar;
