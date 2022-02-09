import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* getTableData(action){
    try{
        const response = yield axios.get('/api/user/table')

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