import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
/* generator function */
function* deleteItem(action){
    try{
        /* checking what the payload is in the function */
        console.log('In deleteItem saga', action.payload);
        /* setting the axios request to a variable and sending the axios request to the router */
        let response = yield axios.delete(`/api/user/table/${action.payload.id}`);
        /* after the axios request, asking SAGA to send another request */
        yield put({
            type: 'FETCH_DATA'
        })
        
    }
    catch(error) {
        /* logging any error that may occur in this request */
        console.error('DELETE failed', error);
    }
}
/* generator function */
function* deleteSaga() {
    /* SAGA is watching for the type (DELETE_SELECTED_ITEM) */
    yield takeEvery('DELETE_SELECTED_ITEM', deleteItem);
}

export default deleteSaga;