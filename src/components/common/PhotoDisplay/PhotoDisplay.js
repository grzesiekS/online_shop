import React from 'react';
import PropTypes from 'prop-types';

import styles from './PhotoDisplay.module.scss';

class PhotoDisplay extends React.Component {
  state = {
    photoStyle: [styles.photoDisplay],
  }

  componentDidUpdate = (prevProps) => {
    if(prevProps.photo !== this.props.photo) {
      console.log(prevProps.photo);
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

    const {photo} = this.props;

    return (
      <div className={this.state.photoStyle.join(' ')}>
        <img className={styles.img} src={photo} alt='default' />
      </div>
    );
  }
}

PhotoDisplay.propTypes = {
  photo: PropTypes.string,
};

export default PhotoDisplay;
