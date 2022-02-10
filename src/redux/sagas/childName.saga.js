import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

//worker Saga
function* setChildName(action){
    try{
        const config = {
            headers: { 'Content-Type': 'application/json'},
            withCredentials: true,
        };

        console.log('action.payload in childName', action.payload);
        
        yield axios.post('/name', action.payload, config);
    }
    catch(error) {
        console.error('ERROR in POSTing child name:', error);
    }

}

function* childNameSaga(){
    yield takeEvery('ADD_CHILD_NAME', setChildName);
}

export default childNameSaga;