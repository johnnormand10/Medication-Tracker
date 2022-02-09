import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

//worker Saga: will be fired on 'FETCH_DATA' actions
function*  fetchData(action){
    try{
        const response = yield axios.get('/api/user/table')

        yield put({
            type: 'SET_DATA',
            payload: response.data
        })

        
    }
    catch(error) {
        console.error('ERROR GETting data in tableSaga', error);
    }
} 

function* tableSaga(){
    yield takeEvery('FETCH_DATA', fetchData);
}

export default tableSaga;