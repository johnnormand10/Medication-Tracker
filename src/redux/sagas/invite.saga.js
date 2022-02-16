import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//Worker Saga: will be fired on 'INVITE' actions
/* generator function */
function* setInvite(action){
    try{
        /* seeing if I made it into the SAGA */
        console.log('in inviteSaga');
        /* checking what the payload is in the function */
        console.log('action.payload in inviteSaga is;', action.payload);
        /* sending an axios request to the router */
        yield axios.post('/api/user/invite', action.payload);
        /* after the axios request, asking SAGA to send another request to save the data given back by the router */
        yield put({ type: 'SET_INVITE', payload: action.payload})
    }
    catch (error) {
        /* logging any error that may occur in the request */
        console.error('ERROR in posting invite data');
    }
}
/* generator function */
function* inviteSaga() {
    /* SAGA is watching for the type (INVITE) */
    yield takeLatest('INVITE', setInvite);
}

export default inviteSaga;