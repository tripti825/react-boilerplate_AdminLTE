import { localStorageAdapter } from 'utils/storage';
import { storage } from 'containers/App/constants';
export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorageAdapter.getItem(storage.USER));

    if (user && user.token) {
    	return { 'Authorization': user.token,
        		 'Content-Type' : 'application/json' };
    } else {
    	return { 'Content-Type': 'application/json'};
    }
}