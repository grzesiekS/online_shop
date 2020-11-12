import {connect} from 'react-redux';

import {getSearchValue, changeSearchValue} from '../../../redux/gamesRedux';
import {loadCartFromLocalStorage} from '../../../redux/cartDataRedux';

import TopBar from './TopBar';

const mapStateToProps = state => ({
  searchValue: getSearchValue(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchValue: value => dispatch(changeSearchValue({value})),
  loadCartFromLocalStorage: () => dispatch(loadCartFromLocalStorage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
