import { authHeader } from 'utils/helpers';
import { registerConstants } from './constant';
import { alertConstants }  from 'containers/App/constants';
import { call, put, takeLatest } from 'redux-saga/effects';
import { request } from 'utils/request';
import { getRequestUrl } from 'utils/helpers/request';

function* doRegister({ payload }) {
    //const requestURL = '/master/api/public/auth/register';
    const requestURL = getRequestUrl('/auth/register')

    const body = JSON.stringify(payload);

    const options = {
        method: 'POST',
        headers: authHeader(),
        body,
    };
    
    try {
        const user = yield call(request, requestURL, options);
        if(user.status !== 'error'){
            let message = "Registeration successful"
            yield put({type: registerConstants.REGISTER_SUCCESS, user});  
            yield put({type: alertConstants.SUCCESS, message});    
        }else{
            let message = "Registeration failed"
            yield put({type: registerConstants.REGISTER_FAILURE, message});  
            yield put({type: alertConstants.ERROR, message});
        }
               
    } catch (error) {

        let message = error.response.statusText;
        yield put({type: registerConstants.REGISTER_FAILURE, error});   
        yield put({type: alertConstants.ERROR, message});         
    }
}

function* doRegisterWatcher() {
    yield takeLatest(registerConstants.REGISTER_REQUEST, doRegister);
} 

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    doRegisterWatcher(),
  ]
}

// export default [
//   doRegisterWatcher,
// ];