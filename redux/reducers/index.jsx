import { combineReducers } from 'redux';
import UploadReducer from './UploadReducer';

const appReducer = combineReducers({
  upload: UploadReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;