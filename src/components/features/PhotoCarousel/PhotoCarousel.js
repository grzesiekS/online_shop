import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './PhotoCarousel.module.scss';
import PhotoDisplay from '../../common/PhotoDisplay/PhotoDisplay';

class PhotoCarousel extends React.Component {
  state = {
    activePhoto: 0,
  }

  changeActivePhoto = index => {
    this.setState({
      ...this.state,
      activePhoto: index,
    });
  }

  nextPhoto = () => {
    this.setState({
      ...this.state,
      activePhoto:
        this.state.activePhoto === this.props.photos.length - 1
          ? this.state.activePhoto
          : this.state.activePhoto + 1,
    });
  }

  previousPhoto = () => {
    this.setState({
      ...this.state,
      activePhoto: this.state.activePhoto === 0 ? 0 : this.state.activePhoto - 1,
    });
  }

  render() {

    const {photos} = this.props;

    return (
      <div className={styles.container}>
        <PhotoDisplay
          photo={photos[this.state.activePhoto]}
          rightAction={() => this.nextPhoto()}
          leftAction={() => this.previousPhoto()}
        />
        <div className={styles.flexBox}>
          {photos.map(photo => (
            <div className={styles.imgCarousel} key={photos.indexOf(photo)}>
              <img
                className=
                  {
                    photos.indexOf(photo) === this.state.activePhoto
                      ?
                      clsx(styles.img, styles.active)
                      :
                      clsx(styles.img)
                  }
                src={photo}
                alt='default'
                onClick={() => this.changeActivePhoto(photos.indexOf(photo))}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

PhotoCarousel.propTypes = {
  photos: PropTypes.array,
};

PhotoCarousel.defaultProps = {
  photos: [],
};

export default PhotoCarousel;
