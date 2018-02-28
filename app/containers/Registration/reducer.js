//import { fromJS } from 'immutable';
import { registerConstants } from './constant';

function registerReducer(state = {}, action) {
  switch (action.type) {
    case registerConstants.REGISTER_REQUEST:
      return {
        registering: true
      }
    case registerConstants.REGISTER_SUCCESS:
      return {
        registered: true
      }
    case registerConstants.REGISTER_FAILURE:
      return {
        registered: false
      }
    default:
      return state
  }
}

export default registerReducer;