import React from 'react';
import PropTypes from 'prop-types';

import Splash from '../../features/Splash/Splash';

const Homepage = props => (
  <div>
    <Splash {...props} />
  </div>
);

Homepage.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};

export default Homepage;
