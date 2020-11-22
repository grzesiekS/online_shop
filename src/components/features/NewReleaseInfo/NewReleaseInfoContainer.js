import {connect} from 'react-redux';

import {getNewReleases, fetchAllNewReleases, getLoadStatus} from '../../../redux/newReleasesRedux';

import NewReleaseInfo from './NewReleaseInfo';

const mapStateToProps = state => ({
  newReleases: getNewReleases(state),
  getLoadStatus: getLoadStatus(state),
});

const mapDispatchToProps = dispatch => ({
  fetchAllNewReleases: () => dispatch(fetchAllNewReleases()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewReleaseInfo);
