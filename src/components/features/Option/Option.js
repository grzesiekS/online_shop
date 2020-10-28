import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import styles from './Option.module.scss';

import OptionCheckboxes from './OptionCheckboxes';

const optionTypes = {
  checkboxes: OptionCheckboxes,
};

class Option extends React.Component {

  render() {
    const {type, name, ...otherProps} = this.props;

    const OptionComponent = optionTypes[type];

    if(!OptionComponent) {
      return null;
    } else {
      return (
        <div className={styles.option}>
          <div className={styles.flexBox}>
            <h2 className={styles.title}>{name}</h2>
            <FontAwesomeIcon icon={faChevronDown} className={styles.arrow}/>
          </div>
          <OptionComponent {...otherProps} />
        </div>
      );
    }
  }
}

Option.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
};

export default Option;
