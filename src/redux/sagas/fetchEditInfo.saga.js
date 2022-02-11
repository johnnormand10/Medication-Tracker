import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchActiveInfo(action){
    try{
        console.log('action.payload in fetchEditInfo is:', action.payload);
        
        const response = yield axios.get(`/api/user/table/${action.payload}/edit`);
        console.log('response.data is ', response.data);
        
        yield put({
            type: 'SET_ACTIVE_INFO',
            payload: response.data
        })
    }
    catch(error) {
        console.error('ERROR in GETting info during edit', error);
    }
}





function* fetchEditInfo(){
    yield takeEvery('FETCH_ACTIVE_EDIT', fetchActiveInfo);
}

export default fetchEditInfo;