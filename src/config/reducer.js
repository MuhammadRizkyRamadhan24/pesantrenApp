import { combineReducers } from 'redux';
import { authReducer } from '../redux/auth/reducers';
import { miscReducer } from '../redux/misc/reducers';

const rootReducer = combineReducers({
  auth: authReducer,
  misc: miscReducer,
});

export { rootReducer };
