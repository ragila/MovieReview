import {takeLatest, put} from 'redux-saga/effects'
import {apiFetchMovie, apiFetchMovieDetail} from '../../common/api/movie'
import {getHeaders} from '../../common/function/auth'

function* getMovie() {
    try{
        const headers = yield getHeaders()
        const resMovie = yield apiFetchMovie(headers)
        // console.log(resMovie.data)
        yield put({type: 'GET_MOVIE_SUCCESS', payload: resMovie.data})
    } catch(e) {
        console.log(e,'ada yg error nih movie saga')
        yield put({type: 'GET_MOVIE_FAILED'})
    }
}
function* getMovieDetail() {
    try{
        const headers = yield getHeaders()
        const resMovie = yield apiFetchMovieDetail(headers)
        console.log(resMovie.data)
        yield put({type: 'GET_MOVIE_DETAIL_FAILED', payload: resMovieDetail})
    } catch(e) {
        console.log(e,'ada yg error getmovieDetail')
        yield put({type: 'GET_MOVIE_DETAIL_FAILED'})
    }
}

function* movieSaga() {
    yield takeLatest('GET_MOVIE', getMovie)
    yield takeLatest('GET_MOVIE_DETAIL', getMovieDetail)
}

export default movieSaga;