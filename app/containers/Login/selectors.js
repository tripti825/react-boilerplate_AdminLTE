export const authentication = () => (state) => state.get('login');
export const alert = () => (state) => state.get('global');

/*
import { createSelector } from 'reselect';

const authentication = (state) => state.get('login');

const getAuthStatus = () => createSelector(
  authentication,
  (loginState) => loginState.get('loggedIn')
);

export {
  authentication,
  getAuthStatus,
};

*/