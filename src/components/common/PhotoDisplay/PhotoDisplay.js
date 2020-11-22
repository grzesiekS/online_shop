import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import styles from './PhotoDisplay.module.scss';

class PhotoDisplay extends React.Component {
  state = {
    photoStyle: [styles.photoDisplay],
  }

  componentDidUpdate = (prevProps) => {
    if(prevProps.photo !== this.props.photo) {
      this.addPhotoStyle('active');
      window.setTimeout(() => {this.removePhotoStyle('active');}, 250);
    }
  }

  addPhotoStyle = style => {
    this.setState({
      ...this.state,
      photoStyle: [
        ...this.state.photoStyle,
        styles[style],
      ],
    });
  }

  removePhotoStyle = style => {
    this.setState({
      ...this.state,
      photoStyle: this.state.photoStyle.filter(pStyle => pStyle !== styles[style]),
    });
  }

  render() {

    const {photo, leftAction, rightAction} = this.props;

    return (
      <div className={this.state.photoStyle.join(' ')}>
        <div
          className={clsx(styles.arrow, styles.left)}
          onClick={() => leftAction()}
        >
          <FontAwesomeIcon icon={faChevronLeft} className={styles.icon}/>
        </div>
        <img className={styles.img} src={photo} alt='default' />
        <div
          className={clsx(styles.arrow, styles.right)}
          onClick={() => rightAction()}
        >
          <FontAwesomeIcon icon={faChevronRight} className={styles.icon}/>
        </div>
      </div>
    );
  }
}

PhotoDisplay.propTypes = {
  photo: PropTypes.string,
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
};

PhotoDisplay.defaultProps = {
  leftAction: () => {},
  rightAction: () => {},
};

export default PhotoDisplay;
