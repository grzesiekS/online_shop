import React from 'react';
import PropTypes from 'prop-types';

import styles from './Option.module.scss';

const OptionCheckboxes = ({values, currentValue, setOptionValue}) => (
  <div className={styles.checkboxes}>
    {values.map(value => (
      <label key={value._id}>
        <input
          type='checkbox'
          value={value._id}
          checked={currentValue.indexOf(value._id) !== -1 ? true : false}
        />
        {value.name}
      </label>
    ))}
  </div>
);

OptionCheckboxes.propTypes = {
  values: PropTypes.array,
  currentValue: PropTypes.node,
  setOptionValue: PropTypes.func,
};

export default OptionCheckboxes;
