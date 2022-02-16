import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
/* generator function */
function* fetchName(action) {
    try{
        /* setting the axios request to a variable and sending an axios request to the router */
        const response = yield axios.get('/api/user/names')
        /* after the axios request, asking SAGA to send another request to save the data given back by the router */
        yield put({ type: 'SET_NAMES', payload: response.data});

    }
    catch(error) {
        /* logging any error that may occur in this request */
        console.error('ERROR in GETting names in names.saga', error);
    }
}

/* generator function */
function* namesSaga(){
    /* SAGA is watching for the type (FETCH_NAME) */
    yield takeEvery('FETCH_NAME', fetchName);
}

export default namesSaga;