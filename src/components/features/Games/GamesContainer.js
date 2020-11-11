import { connect } from 'react-redux';

import {
  getGenresData,
  getSelectedGenres,
  selectGenres,
  fetchAllGenres,
  getGenresLoadingData } from '../../../redux/genresRedux';
import {
  filterGamesByGenres,
  getSearchedGames,
  fetchAllGames,
  getGamesLoadingData,
  getGamesData,
} from '../../../redux/gamesRedux';

import Games from './Games';

const mapStateToProps = state => ({
  genres: getGenresData(state),
  selectedGenres: getSelectedGenres(state),
  games:
    getSelectedGenres(state) !== undefined
      ?
      getSelectedGenres(state).length === 0
        ? getGamesData(state) !== undefined ? getSearchedGames(state) : []
        : filterGamesByGenres(state)
      :
      getGamesData(state) !== undefined ? getSearchedGames(state) : [],
  loadGenresStatus: getGenresLoadingData(state),
  loadGamesStatus: getGamesLoadingData(state),
});

const mapDispatchToProps = dispatch => ({
  selectGenres: id => dispatch(selectGenres(id)),
  getAllGenres: () => dispatch(fetchAllGenres()),
  getAllGames: () => dispatch(fetchAllGames()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Games);
