import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* setCurrentMedication(action){    
    try{
        /* setting the axios request to a variable and sending an axios request to the router */
        let response = yield axios.get(`/get/table/${action.payload.id}`);
        /* checking what the response data is from the router */
        console.log('response.data in currentMedication is:', response.data);
        /* after the axios request, asking SAGA to send another request to save the data given back by the router */
        yield put({
            type: 'SET_MEDICATION',
            payload: response.data
        })
    }
    catch(error) {
        /* logging any error that may occur in this request */
        console.error('ERROR in GETting current medication', error);
    }
}
/* generator function */
function* currentMedicationSaga(){
    /* SAGA is watching for the type (SET_CURRENT_MEDICATION) */
    yield takeEvery('SET_CURRENT_MEDICATION', setCurrentMedication);
}

export default currentMedicationSaga;