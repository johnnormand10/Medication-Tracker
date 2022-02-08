import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchName(action) {
    try{
        const response = yield axios.get('/api/user/names')

        yield put({ type: 'SET_NAMES', payload: response.data});

    }
    catch(error) {
        console.error('ERROR in GETting names in names.saga', error);
    }
}



function* namesSaga(){
    yield takeEvery('FETCH_NAME', fetchName);
}

export default namesSaga;