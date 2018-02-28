import { level1Constants } from './constant';

function level1Reducer(state = {}, action) {
  switch (action.type) {
    case level1Constants.DATA_POST_REQUEST:
      return {
        loading: true
      };
    case level1Constants.DATA_POST_SUCCESS:
      return {
        items: action.data
      };
    case level1Constants.DATA_POST_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}

export default level1Reducer;