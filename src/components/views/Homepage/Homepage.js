import React from 'react';
import PropTypes from 'prop-types';

import Splash from '../../features/Splash/Splash';
import Games from '../../features/Games/GamesContainer';

const Homepage = props => (
  <div>
    <Splash {...props} />
    <Games />
  </div>
);

Homepage.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};

export default Homepage;
