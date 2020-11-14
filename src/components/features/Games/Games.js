import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './Games.module.scss';

import Option from '../Option/Option';
import Game from '../Game/Game';
import Button from '../../common/Button/Button';
import Load from '../../common/Load/Load';

class Games extends React.Component {
  state = {
    activePage: 0,
    productsOnPage: 6,
  }

  changeActivePage = pageNo => {
    this.setState({
      ...this.state,
      activePage: pageNo,
    });
  }

  componentDidMount() {
    const {getAllGenres, getAllGames} = this.props;

    getAllGames();
    getAllGenres();
  }

  componentDidUpdate() {
    const numberOfPages = Math.ceil(this.props.games.length / this.state.productsOnPage);

    if(this.state.activePage > numberOfPages - 1 && this.props.games.length > 0) {
      this.changeActivePage(0);
    }
  }

  render () {

    const {genres, selectedGenres, selectGenres, games, loadGenresStatus, loadGamesStatus} = this.props;

    const pagesCount = Math.ceil(games.length / this.state.productsOnPage);

    const dots = [];
    for(let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={i}>
          <Button
            Type='div'
            className='icon'
            onClick={() => this.changeActivePage(i)}
          >
            <FontAwesomeIcon  icon={faCircle} className={this.state.activePage === i ? clsx(styles.dotIcon, styles.active) : styles.dotIcon} />
          </Button>
        </li>
      );
    }

    return (
      <div>
        {loadGenresStatus !== undefined && loadGamesStatus.active
          ?
          <Load />
          :
          <div className={styles.container}>
            <div className={styles.options}>
              {loadGenresStatus !== undefined && loadGenresStatus.active
                ?
                null
                :
                <Option
                  type='checkboxes'
                  name='Genres'
                  values={genres}
                  currentValue={selectedGenres}
                  setOptionValue= {selectGenres}
                />
              }
            </div>
            <div className={styles.games}>
              <h2 className={styles.title}>Games</h2>
              <div className={styles.flexBox}>
                {games
                  .slice(this.state.activePage * this.state.productsOnPage, (this.state.activePage + 1) * this.state.productsOnPage)
                  .map(game => (
                    <Game key={game._id} name={game.name} price={game.price} images={game.photos} id={game._id} />
                  ))}
                <ul className={styles.dots}>
                  {dots.map(dot => (
                    dot
                  ))}
                </ul>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}

Games.propTypes = {
  genres: PropTypes.array,
  selectedGenres: PropTypes.array,
  selectGenres: PropTypes.func,
  games: PropTypes.array.isRequired,
  getAllGenres: PropTypes.func,
  loadGenresStatus: PropTypes.object,
  getAllGames: PropTypes.func,
  loadGamesStatus: PropTypes.object,
};

export default Games;
