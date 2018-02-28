import { authHeader } from 'utils/helpers';
import { loginConstants } from './constant';
import { alertConstants }  from 'containers/App/constants';
import { call, put, takeLatest } from 'redux-saga/effects';
import { request } from 'utils/request';
import { getRequestUrl } from 'utils/helpers/request';
import { localStorageAdapter } from 'utils/storage';
import { storage } from 'containers/App/constants';

function* doLogin({ payload }) {
    const requestURL = getRequestUrl('/auth/login')
    const body = JSON.stringify(payload);
    
    const options = {
        method: 'POST',
        headers: authHeader(),
        body,
    };
    
    try {
        const user = yield call(request, requestURL, options);
        // const user = {user_data: [{result: {name: 'Testcase1'}}], token: 'sampletokengenerated' }
         if(user && user.token){
            localStorageAdapter.setItem(storage.USER, JSON.stringify(user));
            localStorageAdapter.setItem(storage.LOGGEDIN, "true");

            yield put({type: loginConstants.LOGIN_SUCCESS, user}); 
         }else{
            let message = user.message;

            yield put({type: loginConstants.LOGIN_FAILURE, user});   
            yield put({type: alertConstants.ERROR, message});
         }
                 
    } catch (error) {
        
        yield put({type: loginConstants.LOGIN_FAILURE, error});   
        yield put({type: alertConstants.ERROR, message: ""+error});         
    }
}

function* doLogout() {
    try {
         localStorageAdapter.removeItem(storage.LOGGEDIN);
         localStorageAdapter.removeItem(storage.USER);
         yield put({type: loginConstants.LOGOUT_SUCCESS});    
        // history.push('/');  
    } catch (error) {

        yield put({type: loginConstants.LOGOUT_FAILURE}); 
        yield put({type: alertConstants.ERROR, error});         
    }
}

function* doLoginWatcher() {
	yield takeLatest(loginConstants.LOGIN_REQUEST, doLogin);
}

function* doLogoutWatcher() {
    yield takeLatest(loginConstants.LOGOUT_REQUEST, doLogout);
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    doLoginWatcher(),
    doLogoutWatcher(),
  ]
}
