import {takeLatest, put} from 'redux-saga/effects';
import {apiFetchProfileDetail} from '../../common/api/profile';
import {getAccountId, getHeaders} from '../../common/function/auth';
import {
  GET_PROFILE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILED,
} from '../action/profile_types';

function* getProfileDetail() {
  try {
    const headers = yield getHeaders();
    // const accountId = yield getAccountId();
    // console.log(headers)
    // FETCH PROFILE DATA
    const resProfile = yield apiFetchProfileDetail( headers);
    yield put({type: GET_PROFILE_SUCCESS, payload: resProfile.data});
    // console.log(resProfile.data)
  } catch (e) {
    // show alert
    // ToastAndroid.showWithGravity(
    //   'Gagal mengambil data profil',
    //   ToastAndroid.SHORT,
    //   ToastAndroid.BOTTOM,
    // );
    console.log(e,'gagal ambil data profile')

    yield put({type: GET_PROFILE_FAILED});
  }
}

function* profileSaga() {
  yield takeLatest(GET_PROFILE, getProfileDetail);
}

export default profileSaga;
