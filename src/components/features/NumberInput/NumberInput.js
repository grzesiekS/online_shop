import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import styles from './NumberInput.module.scss';
import Button from '../../common/Button/Button';

const NumberInput = ({qty, className, plusAction, minusAction}) => (
  <div className={clsx(styles.numberInput, styles[className])}>
    <Button Type='div' className='icon' onClick={() => minusAction()}>
      <FontAwesomeIcon icon={faMinus} className={styles.icon} />
    </Button>
    <p className={styles.quantity}>{qty}</p>
    <Button Type='div' className='icon' onClick={() => plusAction()}>
      <FontAwesomeIcon icon={faPlus} className={styles.icon} />
    </Button>
  </div>
);

NumberInput.propTypes = {
  qty: PropTypes.number,
  className: PropTypes.string,
  minusAction: PropTypes.func,
  plusAction: PropTypes.func,
};

export default NumberInput;
