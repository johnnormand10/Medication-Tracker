import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

//worker Saga: will be fired on 'FETCH_DATA' actions
function*  fetchData(action){
    try{
        /* checking what the payload is in the function */
        console.log('response in tableSaga is', action.payload);
        /* setting the axios request to a variable and sending an axios request to the router */
        const response = yield axios.get('/api/user/table')
        /* after the axios request, asking SAGA to send another request to save the data given back by the router */
        yield put({
            type: 'SET_DATA',
            payload: response.data
        })

        
    }
    catch(error) {
        /* logging any error that may occur in this request */
        console.error('ERROR GETting data in tableSaga', error);
    }
} 
/* generator function */
function* tableSaga(){
    /* SAGA is watching for the type (FETCH_DATA) */
    yield takeEvery('FETCH_DATA', fetchData);
}

export default tableSaga;