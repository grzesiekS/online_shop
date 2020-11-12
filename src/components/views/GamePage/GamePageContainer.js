import { connect } from 'react-redux';

import { getSelectedGame, fetchSelectedGame } from '../../../redux/gamesRedux';
import { filterGenresArray ,fetchAllGenres } from '../../../redux/genresRedux';
import { addGameToCart } from '../../../redux/cartDataRedux';
import { changePromptStatus } from '../../../redux/promptInfoRedux';

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
  changePromptStatus: status => dispatch(changePromptStatus({status})),
  getGenresApi: () => dispatch(fetchAllGenres()),
  getSelectedGameApi: id => dispatch(fetchSelectedGame(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
