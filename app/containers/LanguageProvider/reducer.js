/*
 *
 * LanguageProvider reducer
 *
 */

import { fromJS } from 'immutable';
import { localStorageAdapter } from 'utils/storage';
import { storage } from 'containers/App/constants';

import {
  CHANGE_LOCALE,
} from './constants';
import {
  DEFAULT_LOCALE,
} from '../App/constants';

let lang = localStorageAdapter.getItem(storage.LOCALE);
const initialState = lang? fromJS({locale: lang}) : fromJS({
  locale: DEFAULT_LOCALE,
});

function languageProviderReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOCALE:
      {
        localStorageAdapter.setItem(storage.LOCALE, action.locale);
        return state
              .set('locale', action.locale);
      }
    default:
      return state;
  }
}

export default languageProviderReducer;
