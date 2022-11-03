import authSaga from '../redux/auth/sagas';
import createBagHVO from '../redux/create-bag-hvo/sagas';
import { all } from 'redux-saga/effects';

const watcherList = [
  ...authSaga,
  ...createBagHVO,
];

export default function* allSaga() {
  yield all(watcherList);
}
