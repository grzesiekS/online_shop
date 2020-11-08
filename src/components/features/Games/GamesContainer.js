import { connect } from 'react-redux';

import { getGenresData, getSelectedGenres, selectGenres } from '../../../redux/genresRedux';
import { filterGamesByGenres, getSearchedGames } from '../../../redux/gamesRedux';

import Games from './Games';

const mapStateToProps = state => ({
  genres: getGenresData(state),
  selectedGenres: getSelectedGenres(state),
  games: getSelectedGenres(state).length === 0 ? getSearchedGames(state) : filterGamesByGenres(state),
});

const mapDispatchToProps = dispatch => ({
  selectGenres: id => dispatch(selectGenres(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Games);
