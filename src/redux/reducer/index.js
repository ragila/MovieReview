import {combineReducers} from 'redux';
import auth from './auth';
import profile from './profile'
import movie from './movie'

export default combineReducers({
  auth,
  profile,
  movie
});
