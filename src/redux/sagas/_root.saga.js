import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import inviteSaga from './invite.saga';
import childInputSaga from './childMedication.saga';
import namesSaga from './names.saga';
import tableSaga from './table.saga';
import certainSaga from './certainTable.saga';
import childNameSaga from './childName.saga';

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
    certainSaga(),
    childNameSaga(),
  ]);
}
