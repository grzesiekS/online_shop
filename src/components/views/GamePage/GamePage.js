import React from 'react';

import {randomImageSelection} from '../../../utils/randomImage';

import Splash from '../../features/Splash/Splash';
import GameForm from '../../features/GameForm/GameForm';

const GamePage = ({...props}) => {
  const {_id, description, name, photos, price} = props.game;

  const randomImage = randomImageSelection(photos);
  return (
    <div>
      <Splash title={name} image={randomImage} />
      <GameForm _id={_id} description={description} price={price} genres={props.filteredGenres} photos={photos} addToCart={props.addGameToCart} />
    </div>
  );
};

export default GamePage;
