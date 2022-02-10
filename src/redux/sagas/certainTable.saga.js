import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* getTableData(action){
    console.log('action.payload in saga', action.payload);
    
    try{
        console.log('action.payload in certainTable is:', action.payload);
        
        const response = yield axios.get(`/api/user/certain/${action.payload.nameId}`)

        yield put({
            type: 'SET_TABLE',
            payload: response.data
        })
        
    }
    catch(error) {
        console.error('ERROR GETTING CERTAIN data', error);
    }
}



function* certainSaga(){
    yield takeEvery('CERTAIN_DATA', getTableData);
}

export default certainSaga;