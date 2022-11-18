import { takeLatest, call, putResolve } from 'redux-saga/effects';
import { Dispatches } from 'consts/index';
import { apiRequest } from 'helpers/form';
import endpoints from 'config/endpoints';
import { loginResp, registerResp, activateUserResp, reqOtpResp } from './actions';
import { setLoading } from 'redux-app/misc/actions';
import { showErrorToast } from 'components/Toast';

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
    if (result.msg !== 'success') {
      yield putResolve(registerResp([]));
      if (typeof result.msg === 'object') {
        showErrorToast('No HP atau PIN salah');
      } else if (result.msg === 'user inactive, validated otp') {
        yield putResolve(loginResp(result));
        showErrorToast('User belum aktif, Silahkan aktifkan');
      } else {
        showErrorToast('No HP atau PIN salah');
      }
    } else {
      yield putResolve(loginResp(result));
    }
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

function* sagaRegisterFetch(data) {
  try {
    // API call
    yield putResolve(
      setLoading({
        fieldName: 'registerFetch',
        status: true,
      }),
    );
    const result = yield call(apiRequest, endpoints.register, 'post', data.param.data);
    yield putResolve(
      setLoading({
        fieldName: 'registerFetch',
        status: false,
      }),
    );
    if (result.msg !== 'success') {
      yield putResolve(registerResp(''));
      showErrorToast(result.msg);
    } else {
      yield putResolve(registerResp(result.msg));
    }
  } catch (err) {
    yield putResolve(
      setLoading({
        fieldName: 'registerFetch',
        status: false,
      }),
    );
    yield putResolve(registerResp(err));
  }
}

function* sagaActivateUserFetch(data) {
  try {
    // API call
    yield putResolve(
      setLoading({
        fieldName: 'activateUserFetch',
        status: true,
      }),
    );
    const result = yield call(apiRequest, endpoints.activateUser, 'post', data.param.data);
    yield putResolve(
      setLoading({
        fieldName: 'activateUserFetch',
        status: false,
      }),
    );
    if (result.msg !== 'success') {
      yield putResolve(activateUserResp(''));
      showErrorToast(result.msg);
    } else {
      yield putResolve(activateUserResp(result.msg));
    }
  } catch (err) {
    yield putResolve(
      setLoading({
        fieldName: 'activateUserFetch',
        status: false,
      }),
    );
    yield putResolve(registerResp(err));
  }
}

function* sagaReqOtpFetch(data) {
  try {
    // API call
    yield putResolve(
      setLoading({
        fieldName: 'reqOtpFetch',
        status: true,
      }),
    );
    const result = yield call(apiRequest, endpoints.requestotp, 'post', data.param.data);
    yield putResolve(
      setLoading({
        fieldName: 'reqOtpFetch',
        status: false,
      }),
    );
    if (result.msg !== 'success') {
      yield putResolve(reqOtpResp(''));
      showErrorToast(result.msg);
    } else {
      yield putResolve(reqOtpResp(result.msg));
    }
  } catch (err) {
    yield putResolve(
      setLoading({
        fieldName: 'reqOtpFetch',
        status: false,
      }),
    );
    yield putResolve(registerResp(err));
  }
}

export default [
  takeLatest(Dispatches.LOGIN_FETCH, sagaLoginFetch),
  takeLatest(Dispatches.REGISTER_FETCH, sagaRegisterFetch),
  takeLatest(Dispatches.ACTIVATE_USER_FETCH, sagaActivateUserFetch),
  takeLatest(Dispatches.REQ_OTP_FETCH, sagaReqOtpFetch),
];
