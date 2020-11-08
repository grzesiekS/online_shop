import React from 'react';
import PropTypes from 'prop-types';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/fontawesome-free-regular';

import styles from './PromptInfo.module.scss';

const PromptInfo = () => (
  <div className={styles.container}>
    <FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} />
    <p className={styles.info}>success</p>
  </div>
);

PromptInfo.propTypes = {
  status: PropTypes.any,
};

export default PromptInfo;
