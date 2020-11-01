import React from 'react';
import PropTypes from 'prop-types';

import styles from './FlexBox.module.scss';

const FlexBox = ({children}) => (
  <div className={styles.flexBox}>
    {children}
  </div>
);

FlexBox.propTypes = {
  children: PropTypes.node,
};

export default FlexBox;
