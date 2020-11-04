import { connect } from 'react-redux';

import { getSelectedGame } from '../../../redux/gamesRedux';
import { filterGenresArray } from '../../../redux/genresRedux';
import { addGameToCart } from '../../../redux/cartDataRedux';

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

const mapDispatchToProps = dispatch => ({
  addGameToCart: (id, price, qty) => dispatch(addGameToCart({id, price, qty})),
});

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
