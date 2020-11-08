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

  render() {

    const {photos} = this.props;

    return (
      <div className={styles.container}>
        <PhotoDisplay photo={photos[this.state.activePhoto]} />
        <div className={styles.flexBox}>
          {photos.map(photo => (
            <div key={photos.indexOf(photo)}>
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
