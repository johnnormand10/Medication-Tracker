import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* updateItem (action){
    console.log('in updateItem.saga', action.payload.id);

    try{
        
        yield axios.put(`/api/user/table/${action.payload.id}`, action.payload);

        yield put({
            type: 'FETCH_DATA'
        })
    }
    catch(error) {
        console.error('ERROR in updateItem.saga', error);
    }
}



function* updateItemSaga() {
    yield takeEvery('UPDATE_ITEM', updateItem);
}

export default updateItemSaga;