import { connect } from 'react-redux';

import { getGenresData, getSelectedGenres, selectGenres } from '../../../redux/genresRedux';

import Games from './Games';

const mapStateToProps = state => ({
  genres: getGenresData(state),
  selectedGenres: getSelectedGenres(state),
});

const mapDispatchToProps = dispatch => ({
  selectGenres: id => dispatch(selectGenres(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Games);
