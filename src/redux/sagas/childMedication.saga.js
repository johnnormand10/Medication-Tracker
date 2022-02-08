import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

//worker Sage: will be fired on 'SET_CHILD_MEDICATION" actions
function* setChildMedication(){
    try{
        const config = {
            headers: { 'Content-Type': 'application/json'},
            withCredentials: true,
        };

        yield axios.post('/api/user/child', action.payload, config);


        yield put({ type: 'SET_CHILD_MEDICATION', payload: response.data })
    }
    catch (error) {
        console.error('ERROR in posting child and medication data');
    }
}

function* childMedicationSaga() {
    yield takeEvery('CHILD_MEDICATION', setChildMedication);
}

export default childMedicationSaga;