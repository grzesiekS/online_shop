import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './PhotoCarousel.module.scss';

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
              src={'.' + photo}
              alt='default'
              onClick={() => this.changeActivePhoto(photos.indexOf(photo))}
            />
          </div>
        ))}
      </div>
    );
  }
}

PhotoCarousel.propTypes = {
  photos: PropTypes.array,
};

export default PhotoCarousel;
