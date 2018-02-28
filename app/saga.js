import loginSaga from 'containers/Login/saga';
import { call, put, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { alertConstants } from 'containers/App/constants'

function* doLocationChange() {
    try {
        yield put({type: alertConstants.CLEAR});
    } catch (error) {
        yield put({type: alertConstants.ERROR, error});         
    }
}

function* doLocationChangeWatcher() {
    yield takeLatest(LOCATION_CHANGE, doLocationChange);
}

const sagas = [
  loginSaga,
  doLocationChangeWatcher,
];

export default sagas;
