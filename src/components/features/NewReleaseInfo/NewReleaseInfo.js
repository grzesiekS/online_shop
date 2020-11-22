import React from 'react';
import PropTypes from 'prop-types';

import styles from './NewReleaseInfo.module.scss';
import Load from '../../common/Load/Load';

class NewReleaseInfo extends React.Component {
  state = {
    currentData: 0,
    date: new Date().getTime(),
    animationStyle: false,
  }

  componentDidMount() {
    const {fetchAllNewReleases} = this.props;

    fetchAllNewReleases();
    setInterval(() => {
      this.setNextData();
    }, 10000);
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.currentData !== this.state.currentData) {
      this.setAnimation();
      setTimeout(() => {
        this.setAnimation();
      }, 2000);
    }
  }

  setNextData = () => {
    if(this.props.newReleases !== undefined) {
      this.setState({
        ...this.state,
        currentData: this.state.currentData === this.props.newReleases.length - 1 ? 0 : this.state.currentData + 1,
      });
    }
  }

  setAnimation = () => {
    this.setState({
      ...this.state,
      animationStyle: !this.state.animationStyle,
    });
  }

  countDays = releaseDate => (
    Math.floor((releaseDate - this.state.date) / (1000*60*60*24))
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
            <div className={this.state.animationStyle ? styles.fadeIn : null}>
              <h2 className={styles.title}>{newReleases[this.state.currentData].name}</h2>
              <p className={styles.time}>{this.countDays(new Date(newReleases[this.state.currentData].releaseDate).getTime())}</p>
              <p className={styles.subTitle}>Days to release</p>
            </div>
          </div>
    );
  }
}

NewReleaseInfo.propTypes = {
  fetchAllNewReleases: PropTypes.func,
  newReleases: PropTypes.array,
  getLoadStatus: PropTypes.object,
};

NewReleaseInfo.defaultProps = {
  fetchAllNewReleases: () => {},
};

export default NewReleaseInfo;
