import {
    GET_PROFILE,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_FAILED,
  } from '../action/profile_types';
  import {LOGOUT} from '../action/auth_types';
  
  // initial state = nilai awal data profile yang ada di store
  const initialState = {
    isLoading: false,
    profile: [0],
    id: null,
    full_name: null,
    username: null,
    email: null,
    url_image: null,
  };
  
  const profile = (state = initialState, action) => {
    switch (action.type) {
      case GET_PROFILE: {
        return {
          ...state,
          isLoading: true,
        };
      }
      case GET_PROFILE_SUCCESS: {
        return {
          ...state,
          ...action.payload[0],
          isLoading: false,
        };
      }
      case GET_PROFILE_FAILED: {
        return {
          ...state,
          isLoading: false,
        };
      }
      case LOGOUT: {
        return {
            isLoading: false,
            id: null,
            full_name: null,
            username: null,
            email: null,
            url_image: null,
        };
      }
      default:
        return state;
    }
  };
  
  export default profile;
  