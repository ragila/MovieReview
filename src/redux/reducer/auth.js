import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    REGISTER,
    REGISTER_SUCCESS,
    REGISTER_FAILED,
    LOGOUT,
  } from '../action/auth_types';
  
  // initial state = nilai awal data auth yang ada di store
  const initialState = {
    isLoading: false,
    isLoggedIn: false,
  };
  
  const auth = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN: {
        // when button login clicked
        return {
          ...state,
          isLoading: true,
        };
      }
      case LOGIN_SUCCESS: {
        // after check login (to server) success and valid
        return {
          ...state,
          isLoggedIn: true,
          isLoading: false,
        };
      }
      case LOGIN_FAILED: {
        // after check login (to server) not valid or failed
        return {
          ...state,
          isLoading: false,
        };
      }
      case REGISTER: {
        return {
          ...state,
          isLoading: true,
        };
      }
      case REGISTER_SUCCESS: {
        return {
          ...state,
          isLoading: false,
        };
      }
      case REGISTER_FAILED: {
        return {
          ...state,
          isLoading: false,
        };
      }
      case LOGOUT: {
        // when button logout clicked
        return {
          ...state,
          isLoggedIn: false,
          isLoading: false,
        };
      }
      default:
        return state;
    }
  };
  
  export default auth;
  