import { countryConstants } from './constant';

function countryReducer(state = {}, action) {
  switch (action.type) {
    case countryConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case countryConstants.GETALL_SUCCESS:
      return {
        items: action.data
      };
    case countryConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}

export default countryReducer;