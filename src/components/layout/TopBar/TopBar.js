import React from 'react';
import PropTypes from 'prop-types';
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

  componentDidMount() {
    const {loadCartFromLocalStorage} = this.props;

    loadCartFromLocalStorage();
  }

  render () {

    const {changeSearchValue, searchValue} = this.props;

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
                value={searchValue || ''}
                onChange={e => changeSearchValue(e.currentTarget.value)}
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

TopBar.propTypes = {
  changeSearchValue: PropTypes.func,
  searchValue: PropTypes.string,
  loadCartFromLocalStorage: PropTypes.func,
};

TopBar.defaultProps = {
  changeSearchValue: () => {},
  loadCartFromLocalStorage: () => {},
};

export default TopBar;
