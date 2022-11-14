import { takeLatest, call, putResolve } from 'redux-saga/effects';
import { Dispatches } from 'consts/index';
import { apiRequest } from 'helpers/form';
import endpoints from 'config/endpoints';
import { loginResp } from './actions';
import { setLoading } from 'redux-app/misc/actions';

function* sagaLoginFetch(data) {
  try {
    // API call
    yield putResolve(
      setLoading({
        fieldName: 'loginFetch',
        status: true,
      }),
    );
    const result = yield call(apiRequest, endpoints.login, 'post', data.param.data);
    yield putResolve(
      setLoading({
        fieldName: 'loginFetch',
        status: false,
      }),
    );
    console.log(result);
    yield putResolve(loginResp(result));
  } catch (err) {
    yield putResolve(
      setLoading({
        fieldName: 'loginFetch',
        status: false,
      }),
    );
    yield putResolve(loginResp(err));
  }
}

export default [
  takeLatest(Dispatches.LOGIN_FETCH, sagaLoginFetch),
];
