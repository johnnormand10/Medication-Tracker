import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
/* generator function */
function* saveInfo(action) {
    try{
        /* making an axios request to the router */
        yield axios.put(`/user/${action.payload.id}`, action.payload)
        /* asking SAGA to make another request */
        yield put({
            type: "FETCH_DATA"
        })
    }
    catch(error) {
        /* logging any error that may occur in this request */
        console.error('ERROR in PUTting info', error);
    }
}

/* generator function */
function* saveInfoSaga(){
    /* SAGA is watching for the type (SAVE_EDIT_DATA) */
    yield takeEvery('SAVE_EDIT_DATA', saveInfo);
}

export default saveInfoSaga;