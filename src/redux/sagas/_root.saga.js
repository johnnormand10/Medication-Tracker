import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import inviteSaga from './invite.saga';
import childInputSaga from './childMedication.saga';
import namesSaga from './names.saga';
import tableSaga from './table.saga';
import childNameSaga from './childName.saga';
import fetchActiveInfo from './fetchEditInfo.saga';
import saveInfoSaga from './saveInfo.saga';
import currentMedication from './currentMedication.saga';
import updateItem from './updateItem.saga';
import deleteSaga from './delete.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    inviteSaga(),
    childInputSaga(),
    namesSaga(),
    tableSaga(),
    childNameSaga(),
    fetchActiveInfo(),
    saveInfoSaga(),
    currentMedication(),
    updateItem(),
    deleteSaga(),
  ]);
}
