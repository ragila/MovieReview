import {takeLatest, put} from 'redux-saga/effects';
import {apiLogin ,apiRegister} from '../../common/api/auth'
import {removeToken, saveToken} from '../../common/function/auth';
import { LOGIN, LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT, REGISTER, REGISTER_FAILED, REGISTER_SUCCESS} from '../action/auth_types';
import {getProfileDetail} from '../action/profile'
import {getMovie} from '../action/movie'

function* login(action) {
    try{
        // coba login
        const resLogin  = yield apiLogin(action.payload)
        // console.log(resLogin.data)
    if(resLogin && resLogin.data) {
        //save token to local storg
        yield saveToken(resLogin.data.token)
        yield put({type: LOGIN_SUCCESS})
        // yield put(getProfileDetail());
        // yield put(getMovie());
    } else {
        alert('Ups something wrong !')
        yield put({type: LOGIN_FAILED})
    }
    } catch (e) {
        alert('Wrong Email or Password !')
        console.log('e gabisa' ,e)
        yield put({type: LOGIN_FAILED})
    }
}

function* register(action) {
    try {
        const resRegister  = yield apiRegister(action.payload)
        // console.log(resRegister)
    if(resRegister && resRegister.data){
        alert('Registrasion Success')
        yield put({type: REGISTER_SUCCESS})
    } else {
        alert('Register Failed')
        yield put({type: REGISTER_FAILED})
    }
    } catch(e) {
        console.log('error weh regist',e)
        alert('Ups Something Wrong !')
    }
}

function* logout(action) {
    try {
      yield removeToken();
    } catch (e) {
      alert('Gagal logout')
    }
  }

function* authSaga() {
    yield takeLatest(LOGIN, login);
    yield takeLatest(REGISTER, register);
    yield takeLatest(LOGOUT, logout);
  }
  
  export default authSaga;
  