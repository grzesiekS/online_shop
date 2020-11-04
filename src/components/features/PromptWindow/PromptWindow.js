import React from 'react';
import PropTypes from 'prop-types';

import styles from './PromptWindow.module.scss';

const PromptWindow = ({children}) => (
  <div className={styles.container}>
    {children}
  </div>
);

PromptWindow.propTypes = {
  children: PropTypes.node,
};

export default PromptWindow;
