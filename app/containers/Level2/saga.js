import { authHeader } from 'utils/helpers';
import { level2Constants } from './constant';
import { alertConstants }  from 'containers/App/constants';
import { call, put, takeLatest } from 'redux-saga/effects';
import { request } from 'utils/request';
import { getRequestUrl } from 'utils/helpers/request';
import { localStorageAdapter } from 'utils/storage';
import { storage } from 'containers/App/constants';

function* level2Post({ payload }) {
    const requestURL = getRequestUrl('/curd_oprations')
    const body = JSON.stringify(payload);
    
    const options = {
        method: 'POST',
        headers: authHeader(),
        body,
    };
    
    try {
        const data = yield call(request, requestURL, options);
        
         if(data.status === 'success'){
            yield put({type: level2Constants.DATA_GET_SUCCESS, data}); 
         }else{
            let message = data.message;

            yield put({type: level2Constants.DATA_GET_FAILURE, data});   
            yield put({type: alertConstants.ERROR, message});
         }
                 
    } catch (error) {
        
        yield put({type: level2Constants.DATA_GET_FAILURE, error});   
        yield put({type: alertConstants.ERROR, message: ""+error});         
    }
}

function* level2PostWatcher() {
    yield takeLatest(level2Constants.DATA_GET_REQUEST, level2Post);
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    level2PostWatcher(),
  ]
}
