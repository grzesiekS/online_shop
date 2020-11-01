import { connect } from 'react-redux';

import { getGenresData, getSelectedGenres, selectGenres } from '../../../redux/genresRedux';
import { getGamesData, filterGamesByGenres } from '../../../redux/gamesRedux';

import Games from './Games';

const mapStateToProps = state => ({
  genres: getGenresData(state),
  selectedGenres: getSelectedGenres(state),
  games: filterGamesByGenres(state).length === 0 ? getGamesData(state) : filterGamesByGenres(state),
});

const mapDispatchToProps = dispatch => ({
  selectGenres: id => dispatch(selectGenres(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Games);
