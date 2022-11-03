import { combineReducers } from 'redux';
import { authReducer } from '../redux/auth/reducers';
import { createBagHVOReducer } from '../redux/create-bag-hvo/reducers';
import { miscReducer } from '../redux/misc/reducers';

const rootReducer = combineReducers({
  auth: authReducer,
  misc: miscReducer,
  createBagHVO: createBagHVOReducer,
});

export { rootReducer };
