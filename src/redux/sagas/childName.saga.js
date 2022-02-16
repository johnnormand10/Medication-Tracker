import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

//worker Saga
function* setChildName(action){
    try{
        const config = {
            headers: { 'Content-Type': 'application/json'},
            withCredentials: true,
        };
        /* checking what the payload is inside the generator function */
        console.log('action.payload in childName', action.payload);
        /* making a post request to the router */
        yield axios.post('/name', action.payload, config);
    }
    catch(error) {
        /* logging any error may occur in the request */
        console.error('ERROR in POSTing child name:', error);
    }

}
/* generator function */
function* childNameSaga(){
    /* SAGA is watching for the type (ADD_CHILD_NAME) */
    yield takeEvery('ADD_CHILD_NAME', setChildName);
}

export default childNameSaga;