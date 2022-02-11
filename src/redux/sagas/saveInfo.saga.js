import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* saveInfo(action) {
    try{
        yield axios.put(`/api/user/table/${action.payload.id}/edit`, action.payload)

        yield put({
            type: "FETCH_DATA"
        })
    }
    catch(error) {
        console.error('ERROR in PUTting info', error);
    }
}



function* saveInfoSaga(){
    yield takeEvery('SAVE_EDIT', saveInfo);
}

export default saveInfoSaga;