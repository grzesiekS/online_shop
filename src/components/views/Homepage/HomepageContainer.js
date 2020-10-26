import { connect } from 'react-redux';

import {getHomepageData} from '../../../redux/mainRedux';
import Homepage from './Homepage';

const mapStateToProps = state => ({
  title: getHomepageData(state).homepageTitle,
  image: getHomepageData(state).homepageImage,
});


export default connect(mapStateToProps)(Homepage);
