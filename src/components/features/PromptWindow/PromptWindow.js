import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './PromptWindow.module.scss';
import CartForm from '../CartForm/CartFormContainer';
import PromptInfo from '../../common/PromptInfo/PromptInfo';

const PromptWindow = ({children, cartFormActiveStatus}) => (
  <div
    className={
      cartFormActiveStatus
        ?
        clsx(styles.promptWindow, styles.disableBg)
        :
        styles.promptWindow
    }
  >
    {cartFormActiveStatus
      ?
      <CartForm />
      :
      null
    }
    <PromptInfo />
    {children}
  </div>
);

PromptWindow.propTypes = {
  children: PropTypes.node,
  cartFormActiveStatus: PropTypes.bool,
};

export default PromptWindow;
