import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* deleteItem(action){
    try{
        console.log('In deleteItem saga', action.payload);
        let response = yield axios.delete(`/api/user/table/${action.payload.id}`);

        yield put({
            type: 'FETCH_DATA'
        })
        
    }
    catch(error) {
        console.error('DELETE failed', error);
    }
}


function* deleteSaga() {
    yield takeEvery('DELETE_SELECTED_ITEM', deleteItem);
}

export default deleteSaga;