import 'whatwg-fetch';
import { handleResponse } from './error';

export function request(url, options = {}) {
  return fetch(url, options)
    .then(handleResponse);
}
