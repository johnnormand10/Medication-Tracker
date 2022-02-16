import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
/* generator function */
function* updateItem (action){
    /* checking what the payload.id is in the function */
    console.log('in updateItem.saga', action.payload.id);

    try{
        /* making an axios request to the router */
        yield axios.put(`/api/user/table/${action.payload.id}`, action.payload);
        /* after the axios request, asking SAGA to send another request */
        yield put({
            type: 'FETCH_DATA'
        })
    }
    catch(error) {
        /* logging any error that may occur in this request */
        console.error('ERROR in updateItem.saga', error);
    }
}

/* generator function */
function* updateItemSaga() {
    /* SAGA is watching for the type (UPDATE_ITEM) */
    yield takeEvery('UPDATE_ITEM', updateItem);
}

export default updateItemSaga;