import {connect} from 'react-redux';

import {getPromptStatus, changePromptStatus} from '../../../redux/promptInfoRedux';

import PromptInfo from './PromptInfo';

const mapStateToProps = state => ({
  promptStatus: getPromptStatus(state),
});

const mapDispatchToProps = dispatch => ({
  changeStatus: status => dispatch(changePromptStatus(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PromptInfo);
