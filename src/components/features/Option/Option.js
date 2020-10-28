import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

import styles from './Option.module.scss';

import OptionCheckboxes from './OptionCheckboxes';

const optionTypes = {
  checkboxes: OptionCheckboxes,
};

class Option extends React.Component {
  state = {
    active: false,
  }

  changeActiveState = () => {
    this.setState({
      ...this.state,
      active: !this.state.active,
    });
  }

  render() {
    const {type, name, ...otherProps} = this.props;

    const OptionComponent = optionTypes[type];

    if(!OptionComponent) {
      return null;
    } else {
      return (
        <div className={this.state.active ? clsx(styles.option, styles.active) : clsx(styles.option)}>
          <div className={styles.flexBox}>
            <h2 className={styles.title}>{name}</h2>
            <FontAwesomeIcon
              icon={faChevronUp}
              className={this.state.active ? clsx(styles.arrow, styles.active) : clsx(styles.arrow)}
              onClick={() => this.changeActiveState()}
            />
          </div>
          <div className={this.state.active ? clsx(styles.optionComponent, styles.active) : clsx(styles.optionComponent)}>
            <OptionComponent {...otherProps} />
          </div>
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
