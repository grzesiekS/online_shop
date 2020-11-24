import React from 'react';
import PropTypes from 'prop-types';

import {randomImageSelection} from '../../../utils/randomImage';

import styles from './NewReleaseInfo.module.scss';
import Load from '../../common/Load/Load';

class NewReleaseInfo extends React.Component {
  state = {
    currentData: 0,
    date: new Date().getTime(),
    animationStyle: null,
    selectedPhoto: null,
  }

  componentDidMount() {
    const {fetchAllNewReleases} = this.props;

    fetchAllNewReleases();

    this.setNewPhoto();

    setTimeout(() => {
      this.setState({
        ...this.state,
        animationStyle: false,
      });
    },8000);

    this.newReleasesInter = setInterval(() => {
      this.setNextData();
    }, 10000);
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.currentData !== this.state.currentData) {
      this.setAnimation();
      setTimeout(() => {
        this.setAnimation();
      }, 8000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.newReleasesInter);
    this.setState = (state, callback) => {
      return;
    };
  }

  setNextData = () => {
    if(this.props.newReleases !== undefined) {
      const newData = this.state.currentData === this.props.newReleases.length - 1 ? 0 : this.state.currentData + 1;
      this.setState({
        ...this.state,
        currentData: newData,
        selectedPhoto: randomImageSelection(this.props.newReleases[newData].photos),
      });
    }
  }

  setAnimation = () => {
    this.setState({
      ...this.state,
      animationStyle: !this.state.animationStyle,
    });
  }

  setNewPhoto = () => {
    if(this.props.newReleases !== undefined) {
      this.setState({
        ...this.state,
        selectedPhoto: randomImageSelection(this.props.newReleases[this.state.currentData].photos),
      });
    }
  }

  countDays = releaseDate => (
    Math.ceil((releaseDate - this.state.date) / (1000*60*60*24))
  );

  render() {

    const {newReleases, getLoadStatus} = this.props;

    return (
      (getLoadStatus === undefined || getLoadStatus.active) && newReleases === undefined
        ?
        <Load />
        :
        newReleases.length === 0
          ?
          null
          :
          <div className={styles.container}>
            <div className={this.state.animationStyle ? styles.fadeIn : this.state.animationStyle !== null ? styles.fadeOut : null}>
              <h2 className={styles.title}>{newReleases[this.state.currentData].name}</h2>
              <img
                className={styles.newReleaseImg}
                src={this.state.selectedPhoto}
                alt='new geme'
                width='200'
                height='450'
              />
              <p className={styles.time}>{this.countDays(new Date(newReleases[this.state.currentData].releaseDate).getTime())}</p>
              <p className={styles.subTitle}>
                {this.countDays(new Date(newReleases[this.state.currentData].releaseDate).getTime()) === 1
                  ?
                  `Day to release`
                  :
                  `Days to release`
                }
              </p>
            </div>
          </div>
    );
  }
}

NewReleaseInfo.propTypes = {
  fetchAllNewReleases: PropTypes.func,
  newReleases: PropTypes.array,
  getLoadStatus: PropTypes.object,
  photos: PropTypes.array,
};

NewReleaseInfo.defaultProps = {
  fetchAllNewReleases: () => {},
};

export default NewReleaseInfo;
