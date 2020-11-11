import { connect } from 'react-redux';

import { getSelectedGame } from '../../../redux/gamesRedux';
import { filterGenresArray, getGenresData ,fetchAllGenres } from '../../../redux/genresRedux';
import { addGameToCart } from '../../../redux/cartDataRedux';
import { changePromptStatus } from '../../../redux/promptInfoRedux';

import GamePage from './GamePage';

const mapStateToProps = (state, props) => {
  const game = getSelectedGame(state, props.match.params.id);
  const filteredGenres = getGenresData(state) === undefined ? null : filterGenresArray(state, game.genres);
  return (
    {
      game,
      filteredGenres,
    }
  );
};

const mapDispatchToProps = dispatch => ({
  addGameToCart: (id, price, qty) => dispatch(addGameToCart({id, price, qty})),
  changePromptStatus: status => dispatch(changePromptStatus({status})),
  getGenresApi: () => dispatch(fetchAllGenres()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
