import { level2Constants } from './constant';

function level2Reducer(state = {}, action) {
  switch (action.type) {
    case level2Constants.DATA_GET_REQUEST:
      return {
        loading: true
      };
    case level2Constants.DATA_GET_SUCCESS:
      return {
        items: action.data
      };
    case level2Constants.DATA_GET_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}

export default level2Reducer;