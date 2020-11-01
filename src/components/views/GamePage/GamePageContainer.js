import { connect } from 'react-redux';

import { getSelectedGame } from '../../../redux/gamesRedux';
import { filterGenresArray } from '../../../redux/genresRedux';

import GamePage from './GamePage';

const mapStateToProps = (state, props) => {
  const game = getSelectedGame(state, props.match.params.id);
  return (
    {
      game,
      filteredGenres: filterGenresArray(state, game.genres),
    }
  );
};

export default connect(mapStateToProps)(GamePage);
