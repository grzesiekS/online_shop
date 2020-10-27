import React from 'react';
import PropTypes from 'prop-types';

import styles from './Option.module.scss';

import OptionCheckboxes from './OptionCheckboxes';

const optionTypes = {
  checkboxes: OptionCheckboxes,
};

const Option = ({type, name, ...otherProps}) => {
  const OptionComponent = optionTypes[type];

  if(!OptionComponent) {
    return null;
  } else {
    return (
      <div className={styles.option}>
        <h1 className={styles.title}>{name}</h1>
        <OptionComponent {...otherProps} />
      </div>
    );
  }
};

Option.propTypes = {
  name: PropTypes.string,
};

export default Option;
