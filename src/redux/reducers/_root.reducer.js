import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import childMedication from './childMedication.reducer';
import invite from './invite.reducer';
import names from './names.reducer';
import tableReducer from './table.reducer';
import certainReducer from './certain.reducer';
import activeEditInfo from './fetchEditInfo.reducer';
import currentMedication from './currentMedication.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  childMedication,
  invite,
  names,
  tableReducer,
  certainReducer,
  activeEditInfo,
  currentMedication,
});

export default rootReducer;
