import React from 'react';
import PropTypes from 'prop-types';

import {randomImageSelection} from '../../../utils/randomImage';

import Splash from '../../features/Splash/Splash';
import GameForm from '../../features/GameForm/GameForm';

const GamePage = ({...props}) => {
  const {_id, description, name, photos, price} = props.game;

  const randomImage = randomImageSelection(photos);
  return (
    <div>
      <Splash title={name} image={randomImage} />
      <GameForm
        _id={_id}
        description={description}
        price={price}
        genres={props.filteredGenres}
        photos={photos}
        addToCart={props.addGameToCart}
        changePromptInfoStatus={props.changePromptStatus}
        getGenresApi={props.getGenresApi}
        getSelectedGameApi={props.getSelectedGameApi}
        gameId={props.match.params.id}
      />
    </div>
  );
};

GamePage.propTypes = {
  game: PropTypes.shape({
    _id: PropTypes.string,
    description: PropTypes.string,
    name: PropTypes.string,
    photos: PropTypes.array,
    price: PropTypes.number,
  }).isRequired,
  filteredGenres: PropTypes.array,
  addGameToCart: PropTypes.func,
  changePromptStatus: PropTypes.func,
  getGenresApi: PropTypes.func,
  getSelectedGameApi: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export default GamePage;
