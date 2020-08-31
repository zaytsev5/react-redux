import { combineReducers } from 'redux';
import postReducer from './postReducer';

export default combineReducers({
  data: postReducer
});
// use combineReducers to combines reducers
