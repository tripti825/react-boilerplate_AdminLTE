import { loginConstants } from './constant';
import { localStorageAdapter } from 'utils/storage';
import { storage } from 'containers/App/constants';

let user = JSON.parse(localStorageAdapter.getItem(storage.USER));
const initialState = user ? { loggedIn: true, user } : {};

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case loginConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case loginConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case loginConstants.LOGIN_FAILURE:
      return {};
    case loginConstants.LOGOUT_REQUEST:
      return {};
    case loginConstants.LOGOUT_SUCCESS:
      return {};
    case loginConstants.LOGOUT_FAILURE:
      return {};
    default:
      return state
  } 
}

export default loginReducer;

// import { fromJS } from 'immutable';
// import { loginConstants } from './constant';

// let user = JSON.parse(localStorage.getItem('user'));
// const initialState = user ? fromJS({ loggedIn: true, user: user }) : fromJS({});

// function loginReducer(state = initialState, action) {
//    switch (action.type) {
//    case loginConstants.LOGIN_REQUEST:
//        return state
//           .set('loggingIn', true)
//           .set('user', action.true)
//    case loginConstants.LOGIN_SUCCESS:
//        return state
//           .set('loggedIn', true)
//           .set('user', action.true)
//   case loginConstants.LOGIN_FAILURE:
//        return fromJS({});
//   case loginConstants.LOGOUT_REQUEST:
//        return fromJS({});
//   case loginConstants.LOGOUT_SUCCESS:
//        return fromJS({});
//   case loginConstants.LOGOUT_FAILURE:
//        return fromJS({});
//   default:
//        return state
//   } 
//  }

//  export default loginReducer;