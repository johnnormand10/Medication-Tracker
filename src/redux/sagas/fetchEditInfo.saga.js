import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
/* generator function */
function* fetchActiveInfo(action){
    try{
        /* checking what the payload is in the function */
        console.log('action.payload in fetchEditInfo is:', action.payload);
        /* setting the axios request to a variable and sending an axios request to the router */
        const response = yield axios.post(`/user/edit/${action.payload.id}`, action.payload);
        /* after the axios request, asking SAGA to send another request to save the data given back by the router */
        yield put({
            type: 'SET_ACTIVE_INFO',
            payload: response.data
        })
        console.log('response.data is ', response.data);
    }
    catch(error) {
        /* logging any error that may occur in this request */
        console.error('ERROR in GETting info during edit', error);
    }
}

/* generator function */
function* fetchEditInfo(){
    /* SAGA is watching for the type (FETCH_ACTIVE_EDIT) */
    yield takeEvery('FETCH_ACTIVE_EDIT', fetchActiveInfo);
}

export default fetchEditInfo; 