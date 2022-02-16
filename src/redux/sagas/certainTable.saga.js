import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
//generator function for SAGA CERTAIN_DATA
function* getTableData(action){
    /* checking what the payload is inside the generator function */
    console.log('action.payload in saga', action.payload);
    
    try{
        /* checking what the payload is again */
        console.log('action.payload in certainTable is:', action.payload);
        /* setting the axios request to a variable and sending an axios request to the router */
        const response = yield axios.get(`/api/user/certain/${action.payload.nameId}`)
        /* after the axios request, asking SAGA to send another request to save the data given back by the router */
        yield put({
            type: 'SET_TABLE',
            payload: response.data
        })
        
    }
    catch(error) {
        /* logging any error that may occur in this request */
        console.error('ERROR GETTING CERTAIN data', error);
    }
}


//generator function
function* certainSaga(){
    /* SAGA is watching for the type(CERTAIN_DATA) */
    yield takeEvery('CERTAIN_DATA', getTableData);
}

export default certainSaga;