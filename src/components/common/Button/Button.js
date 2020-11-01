import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Button.module.scss';

const Button = ({Type= 'a', children, className, ...otherProps}) => {
  return (
    <Type
      className={clsx(styles.button, styles[className])}
      {...otherProps}
    >
      {children}
    </Type>
  );
};

Button.propTypes = {
  Type: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
