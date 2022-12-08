import authSaga from '../redux/auth/sagas';
import { all } from 'redux-saga/effects';

const watcherList = [
  ...authSaga,
];

export default function* allSaga() {
  yield all(watcherList);
}
