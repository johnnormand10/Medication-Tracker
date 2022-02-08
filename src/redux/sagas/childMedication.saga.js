import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

//worker Sage: will be fired on 'SET_CHILD_MEDICATION" actions
function* setChildMedication(action){
    try{

        console.log('in childMedicationSaga');
        console.log('action.payload in childMedicationSaga is:', action.payload);
        
        yield axios.post('/api/user/medication', action.payload);

        yield put({ type: 'CHILD_NAME'})
    }
    catch (error) {
        console.error('ERROR in posting child and medication data');
    }
}


function* childMedicationSaga() {
    yield takeEvery('CHILD_MEDICATION', setChildMedication);
}

export default childMedicationSaga;