import {all} from 'redux-saga/effects';
import authSaga from './auth';
import profileSaga from './profile'
import movieSaga from './movie'

export default function* rootSaga() {
  yield all([authSaga(), profileSaga(), movieSaga()]);
}
