import React from 'react';
import PropTypes from 'prop-types';

import styles from './PromptWindow.module.scss';
import CartForm from '../CartForm/CartFormContainer';

const PromptWindow = ({children, cartFormActiveStatus}) => (
  <div className={styles.promptWindow}>
    {cartFormActiveStatus
      ?
      <CartForm />
      :
      null
    }

    {children}
  </div>
);

PromptWindow.propTypes = {
  children: PropTypes.node,
  cartFormActiveStatus: PropTypes.bool,
};

export default PromptWindow;
