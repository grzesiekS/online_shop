import { connect } from 'react-redux';

import { getGenresData } from '../../../redux/genresRedux';

import Games from './Games';

const mapStateToProps = state => ({
  genres: getGenresData(state),
});

export default connect(mapStateToProps)(Games);
