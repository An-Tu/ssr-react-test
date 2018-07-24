import { combineReducers } from 'redux';
import userReducer from './user_reducer';
import authReducer from './auth_reducers';
import adminsReducer from './admins_reducer';
import tableReducer from './table_reducer';

export default combineReducers({
  users: userReducer,
  auth: authReducer,
  admins: adminsReducer,
  items: tableReducer,
});
