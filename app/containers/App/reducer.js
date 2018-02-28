/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import { alertConstants } from './constants';

// The initial state of the App
// const initialState = fromJS({});
const initialState = {};
// function appReducer(state = initialState, action) {
//   switch (action.type) {
//     case alertConstants.SUCCESS:
//       return state
//         .set('alert-success', action.message)
//     case alertConstants.ERROR:
//       return state
//         .set('alert-danger', action.message);
//     case alertConstants.CLEAR:
//       return state
//         .set('', null)
//     default:
//       return state;
//   }
// }

function appReducer(state = initialState, action) {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        class: 'success',
        message: action.message
      }
    case alertConstants.ERROR:
      return {
        color: 'danger',
        message: action.message
      }
    case alertConstants.CLEAR:
      return {}
    default:
      return state;
  }
}

export default appReducer;
