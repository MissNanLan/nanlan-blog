import { combineReducers } from 'redux';
import { reducer as headerReducer } from '../components/header/store';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as detailReducer } from '../pages/detail/store';

export default combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
    // login: loginReducer
  });
