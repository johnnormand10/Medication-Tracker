import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

//worker Sage: will be fired on 'SET_CHILD_MEDICATION" actions
function* setChildMedication(action){
    try{
        /* checking if I made it to the SAGA */
        console.log('in childMedicationSaga');
        /* checking what the payload is */
        console.log('action.payload in childMedicationSaga is:', action.payload);
        /* sending a post request to the router */
        yield axios.post('/api/user/medication', action.payload);

        yield put({ type: 'CHILD_NAME'})
    }
    catch (error) {
        /* logging any error that may occur in this request */
        console.error('ERROR in posting child and medication data');
    }
}

/* generator function */
function* childMedicationSaga() {
    /* SAGA is watching for the type (CHILD_MEDICATION) */
    yield takeEvery('CHILD_MEDICATION', setChildMedication);
}

export default childMedicationSaga;