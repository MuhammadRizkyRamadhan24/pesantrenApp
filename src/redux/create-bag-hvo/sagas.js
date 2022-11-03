import { takeLatest, call, putResolve } from 'redux-saga/effects';
import { Dispatches } from 'consts/index';
import { apiRequest } from 'helpers/form';
import endpoints from 'config/endpoints';
import { getHacbNoResp, getDetailCnoteResp } from './actions';
import { setLoading } from 'redux-app/misc/actions';

function* sagaGetHacbNoFetch(data) {
  try {
    // API call
    yield putResolve(
      setLoading({
        fieldName: 'getHacbNoFetch',
        status: true,
      }),
    );
    const result = yield call(apiRequest, endpoints.getHacbNo(data.param), 'get', null, 10000);
    yield putResolve(
      setLoading({
        fieldName: 'getHacbNoFetch',
        status: false,
      }),
    );
    yield putResolve(getHacbNoResp(result.data));
  } catch (err) {
    yield putResolve(
      setLoading({
        fieldName: 'getHacbNoFetch',
        status: false,
      }),
    );
    yield putResolve(getHacbNoResp(err));
  }
}

function* sagaGetDetailCnoteFetch(data) {
  try {
    // API call
    yield putResolve(
      setLoading({
        fieldName: 'detailCnoteFetch',
        status: true,
      }),
    );
    const result = yield call(apiRequest, endpoints.getCnote(data.param), 'get', null, 10000);
    yield putResolve(
      setLoading({
        fieldName: 'detailCnoteFetch',
        status: false,
      }),
    );
    yield putResolve(getDetailCnoteResp(result.data));
  } catch (err) {
    yield putResolve(
      setLoading({
        fieldName: 'detailCnoteFetch',
        status: false,
      }),
    );
    yield putResolve(getDetailCnoteResp(err));
  }
}

export default [
  takeLatest(Dispatches.GET_HACB_NO_FETCH, sagaGetHacbNoFetch),
  takeLatest(Dispatches.GET_DETAIL_CNOTE_FETCH, sagaGetDetailCnoteFetch),
];
