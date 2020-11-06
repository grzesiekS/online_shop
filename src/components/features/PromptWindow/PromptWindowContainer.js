import {connect} from 'react-redux';

import {getActiveCartFormOptions} from '../../../redux/cartDataRedux';

import PromptWindow from './PromptWindow';

const mapStateToProps = state => ({
  cartFormActiveStatus: getActiveCartFormOptions(state),
});

export default connect(mapStateToProps)(PromptWindow);
