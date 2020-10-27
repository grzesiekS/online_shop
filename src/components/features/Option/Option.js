import React from 'react';
import PropTypes from 'prop-types';

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
          <h2 className={styles.title}>{name}</h2>
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
