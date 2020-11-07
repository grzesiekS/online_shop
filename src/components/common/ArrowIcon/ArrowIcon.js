import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ArrowIcon.module.scss';

const ArrowIcon = ({className, clickHandler}) => (
  <FontAwesomeIcon
    icon={faChevronDown}
    className={clsx(styles.arrow, styles[className])}
    onClick={clickHandler}
  />
);

ArrowIcon.propTypes = {
  className: PropTypes.string,
  clickHandler: PropTypes.func,
};

ArrowIcon.defaultProps = {
  clickHandler: () => {},
};

export default ArrowIcon;
