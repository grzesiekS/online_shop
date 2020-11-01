import React from 'react';

import {randomImageSelection} from '../../../utils/randomImage';

import Splash from '../../features/Splash/Splash';
import GameForm from '../../features/GameForm/GameForm';

const GamePage = ({...props}) => {
  const {description, name, photos, price} = props.game;

  const randomImage = randomImageSelection(photos);
  return (
    <div>
      <Splash title={name} image={randomImage} />
      <GameForm description={description} price={price} genres={props.filteredGenres} />
    </div>
  );
};

export default GamePage;
