import { combineReducers } from 'redux'
import headerReducer from './headerReducer';

// 当有多个reducer的时候，需要将他们合并起来，然后combineReducers的返回值为一个reducer
export default combineReducers(
    {headerReducer}
);