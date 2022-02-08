import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//Worker Saga: will be fired on 'INVITE' actions

function* setInvite(action){
    try{
        console.log('in inviteSaga');
        console.log('action.payload in inviteSaga is;', action.payload);

        yield axios.post('/api/user/invite', action.payload);

        yield put({ type: 'SET_INVITE', payload: action.payload})
    }
    catch (error) {
        console.error('ERROR in posting invite data');
    }
}

function* inviteSaga() {
    yield takeLatest('INVITE', setInvite);
}

export default inviteSaga;