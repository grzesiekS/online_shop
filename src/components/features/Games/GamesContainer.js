import { connect } from 'react-redux';

import { getGenresData, getSelectedGenres, selectGenres, fetchAllGenres, getGenresLoadingData } from '../../../redux/genresRedux';
import { filterGamesByGenres, getSearchedGames } from '../../../redux/gamesRedux';

import Games from './Games';

const mapStateToProps = state => ({
  genres: getGenresData(state),
  selectedGenres: getSelectedGenres(state),
  games:
    getSelectedGenres(state) !== undefined
      ?
      getSelectedGenres(state).length === 0
        ? getSearchedGames(state)
        : filterGamesByGenres(state)
      :
      getSearchedGames(state),
  loadGenresStatus: getGenresLoadingData(state),
});

const mapDispatchToProps = dispatch => ({
  selectGenres: id => dispatch(selectGenres(id)),
  getAllGenres: () => dispatch(fetchAllGenres()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Games);
