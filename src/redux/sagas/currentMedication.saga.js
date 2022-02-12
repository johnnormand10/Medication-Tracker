import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* setCurrentMedication(action){    
    try{
        let response = yield axios.get(`/get/table/${action.payload.id}`)
        console.log('response.data in currentMedication is:', response.data);
        
        yield put({
            type: 'SET_MEDICATION',
            payload: response.data
        })
    }
    catch(error) {
        console.error('ERROR in GETting current medication', error);
    }
}

function* currentMedicationSaga(){
    yield takeEvery('SET_CURRENT_MEDICATION', setCurrentMedication);
}

export default currentMedicationSaga;