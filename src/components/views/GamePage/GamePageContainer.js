import { connect } from 'react-redux';

import { getSelectedGame } from '../../../redux/gamesRedux';

import GamePage from './GamePage';

const mapStateToProps = (state, props) => ({
  game: getSelectedGame(state, props.match.params.id),
});

export default connect(mapStateToProps)(GamePage);
