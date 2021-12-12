import { combineReducers } from 'redux';

import usersReducer from './UsersReducer';
import newsReducer from './NewsReducer';
import modalReducer from './ModalReducer';

const rootReducer = combineReducers({
  newsReducer,
  usersReducer,
  modalReducer,
});

export default rootReducer;
