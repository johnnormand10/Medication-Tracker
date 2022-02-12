import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* saveInfo(action) {
    try{
        yield axios.put(`/user/${action.payload.id}`, action.payload)

        yield put({
            type: "FETCH_DATA"
        })
    }
    catch(error) {
        console.error('ERROR in PUTting info', error);
    }
}



function* saveInfoSaga(){
    yield takeEvery('SAVE_EDIT_DATA', saveInfo);
}

export default saveInfoSaga;