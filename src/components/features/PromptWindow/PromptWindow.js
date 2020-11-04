import React from 'react';
import PropTypes from 'prop-types';

import styles from './PromptWindow.module.scss';
import CartForm from '../CartForm/CartForm';

const PromptWindow = ({children}) => (
  <div className={styles.promptWindow}>
    <CartForm />
    {children}
  </div>
);

PromptWindow.propTypes = {
  children: PropTypes.node,
};

export default PromptWindow;
