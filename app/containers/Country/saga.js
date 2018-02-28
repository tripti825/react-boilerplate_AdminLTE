import { call, put, takeLatest } from 'redux-saga/effects';
import { countryConstants } from './constant';
import { authHeader } from 'utils/helpers';
import { alertConstants }  from 'containers/App/constants';
import { request } from 'utils/request';
import { getRequestUrl } from 'utils/helpers/request';


function* getCountry({ payload }) {
    const requestURL = getRequestUrl('/get_country')

    const body = JSON.stringify(payload);

    const options = {
        method: 'POST',
        headers: authHeader(),
        body,
    };
    
    try {
        const data = yield call(request, requestURL, options);
        yield put({type: countryConstants.GETALL_SUCCESS, data});        
    } catch (error) {

        yield put({type: countryConstants.GETALL_FAILURE, error});   
        yield put({type: alertConstants.ERROR, message: ""+error});         
    }
}

function* getCountryWatcher() {
    yield takeLatest(countryConstants.GETALL_REQUEST, getCountry);
} 

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    getCountryWatcher()
  ]
}
