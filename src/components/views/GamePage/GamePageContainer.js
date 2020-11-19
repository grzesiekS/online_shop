import { connect } from 'react-redux';

import { getSelectedGame, fetchSelectedGame } from '../../../redux/gamesRedux';
import { filterGenresArray ,fetchAllGenres } from '../../../redux/genresRedux';
import { addGameToCart, saveGameToLocalStorage } from '../../../redux/cartDataRedux';
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
  addGameToCart: (id, price, qty, gameInCartId) => dispatch(addGameToCart({id, price, qty, gameInCartId})),
  changePromptStatus: status => dispatch(changePromptStatus({status})),
  getGenresApi: () => dispatch(fetchAllGenres()),
  getSelectedGameApi: id => dispatch(fetchSelectedGame(id)),
  saveCartToLocalStorage: cartDetails => dispatch(saveGameToLocalStorage(cartDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
