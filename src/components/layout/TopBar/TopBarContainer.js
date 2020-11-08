import {connect} from 'react-redux';

import {getSearchValue, changeSearchValue} from '../../../redux/gamesRedux';

import TopBar from './TopBar';

const mapStateToProps = state => ({
  searchValue: getSearchValue(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchValue: value => dispatch(changeSearchValue({value})),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
