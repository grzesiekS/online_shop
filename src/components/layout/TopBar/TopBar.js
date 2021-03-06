import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faSearch, faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './TopBar.module.scss';
import ShoppingCart from '../../features/ShoppingCart/ShoppingCartContainer';
import Button from '../../common/Button/Button';

class TopBar extends React.Component {
  state = {
    activeSearch: false,
    navBar: true,
  }

  changeActiveSearchState = () => {
    this.setState({
      ...this.state,
      activeSearch: !this.state.activeSearch,
    });
  }

  resizeTopBar = (screenSize) => {

    if(screenSize <= 450 && this.state.navBar) {
      this.setState({
        ...this.state,
        navBar: false,
      });
    } else if(!this.state.navBar && screenSize > 450) {
      this.setState({
        ...this.state,
        navBar: true,
      });
    }

  }

  navBarStateChange = () => {
    this.setState({
      ...this.state,
      navBar: !this.state.navBar,
    });
  }

  componentDidMount() {
    const {loadCartFromLocalStorage} = this.props;

    loadCartFromLocalStorage();

    let actualWidth = window.innerWidth;
    window.addEventListener('resize', () => {
      actualWidth = window.innerWidth;
      this.resizeTopBar(actualWidth);
    });

    this.resizeTopBar(actualWidth);

  }

  componentDidUpdate() {
    if(!this.state.activeSearch && this.props.searchValue !== '') this.props.changeSearchValue('');
  }

  render () {

    const {changeSearchValue, searchValue} = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.hamburgerBars}>
          <Button className={'icon'} onClick={() => this.navBarStateChange()}>
            <FontAwesomeIcon icon={faBars} />
          </Button>
        </div>
        <nav>
          <ul className={!this.state.navBar ? clsx(styles.navigation, styles.disable) : clsx(styles.navigation, styles.show)}>
            <li>
              <Link aria-label='logo' to='/'>
                <FontAwesomeIcon icon={faGamepad} className={styles.logo} />
              </Link>
            </li>
            <li>
              <label htmlFor='search' aria-label='search input'></label>
              <input
                id='search'
                type='text'
                className={this.state.activeSearch ? clsx(styles.serachInput, styles.active) : styles.serachInput}
                disabled = {!this.state.activeSearch ? 'disabled' : null}
                value={searchValue || ''}
                onChange={e => changeSearchValue(e.currentTarget.value)}
              />
              <a aria-label='search' href='/#' onClick={e => {
                e.preventDefault();
                this.changeActiveSearchState();
              }}>
                <FontAwesomeIcon icon={faSearch} className={styles.searchIcon}/>
              </a>
            </li>
          </ul>
        </nav>
        <div className={!this.state.navBar ? clsx(styles.shoppingCart, styles.disable) : clsx(styles.shoppingCart, styles.show)}>
          <ShoppingCart />
        </div>
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
