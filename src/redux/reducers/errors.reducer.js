import { combineReducers } from 'redux';

// loginMessage holds the string that will display
// on the login screen if there's an error
const loginMessage = (state = '', action) => {
  /* switch statement */
  switch (action.type) {
    case 'CLEAR_LOGIN_ERROR':
      /* if the case is CLEAR_LOGIN_ERROR */
      /* return an empty string */
      return '';
    case 'LOGIN_INPUT_ERROR':
      /* if the case is LOGIN_INPUT_ERROR */
      /* returns a string for an error */
      return 'Enter your username and password!';
    case 'LOGIN_FAILED':
      /* if the case is LOGIN_FAILED */
      /* returns a string for an error */
      return "Oops! The username and password didn't match. Try again!";
    case 'LOGIN_FAILED_NO_CODE':
      /* if the case is LOGIN_FAILED_NO_CODE */
      /* return a string for an error */
      return 'Oops! Something went wrong! Is the server running?';
    default:
      return state;
  }
};

// registrationMessage holds the string that will display
// on the registration screen if there's an error
const registrationMessage = (state = '', action) => {
  /* switch statement */
  switch (action.type) {
    case 'CLEAR_REGISTRATION_ERROR':
      /* if the case is CLEAR_REGISTRATION_ERROR */
      /* return an empty string */
      return '';
    case 'REGISTRATION_INPUT_ERROR':
      /* if the case is REGISTRATION_INPUT_ERROR */
      /* return a string for an error */
      return 'Choose a username and password!';
    case 'REGISTRATION_FAILED':
      /* if the case is REGISTRATION_FAILED */
      /* return a string for an error */
      return "Oops! That didn't work. The username might already be taken. Try again!";
    default:
      return state;
  }
};

// make one object that has keys loginMessage, registrationMessage
// these will be on the redux state at:
// state.errors.loginMessage and state.errors.registrationMessage
export default combineReducers({
  loginMessage,
  registrationMessage,
});
