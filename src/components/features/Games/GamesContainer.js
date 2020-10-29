import { connect } from 'react-redux';

import { getGenresData, getSelectedGenres, selectGenres } from '../../../redux/genresRedux';
import { getGamesData } from '../../../redux/gamesRedux';

import Games from './Games';

const mapStateToProps = state => ({
  genres: getGenresData(state),
  selectedGenres: getSelectedGenres(state),
  games: getGamesData(state),
});

const mapDispatchToProps = dispatch => ({
  selectGenres: id => dispatch(selectGenres(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Games);
