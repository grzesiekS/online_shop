import React from 'react';
import PropTypes from 'prop-types';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/fontawesome-free-regular';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './PromptInfo.module.scss';

class PromptInfo extends React.Component {

  promptGenerator = status => {
    switch(status) {
      case 'success':
        return (
          <div className={styles.prompt}>
            <FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} />
            <p className={styles.info}>success</p>
          </div>
        );
      case 'error':
        return (
          <div className={styles.prompt}>
            <FontAwesomeIcon icon={faExclamationCircle} className={styles.exIcon} />
            <p className={styles.info}>error</p>
          </div>
        );
      default:
        return null;
    }
  };

  componentDidUpdate(prevProps) {
    if(this.props.promptStatus !== null && (prevProps.promptStatus === undefined || prevProps.promptStatus === null)) {
      setTimeout(() => this.props.changeStatus(null), 1500);
    }
  }

  render () {

    const {promptStatus} = this.props;

    return (
      <div className={styles.container}>
        {this.promptGenerator(promptStatus)}
      </div>
    );
  }
}

PromptInfo.propTypes = {
  promptStatus: PropTypes.any,
  changeStatus: PropTypes.func,
};

export default PromptInfo;
