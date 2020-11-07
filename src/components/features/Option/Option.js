import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Option.module.scss';

import OptionCheckboxes from './OptionCheckboxes';
import ArrowIcon from '../../common/ArrowIcon/ArrowIcon';

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
        <div className={styles.option}>
          <div className={styles.flexBox}>
            <h2 className={styles.title}>{name}</h2>
            <ArrowIcon
              className={this.state.active ? 'active' : null}
              clickHandler={() => this.changeActiveState()}
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
