const userReducer = (state = {}, action) => {
  /* switch statement */
  switch (action.type) {
    case 'SET_USER':
      /* if the case is SET_USER */
      /* return the payload from the database */
      return action.payload;
    case 'UNSET_USER':
      /* if the case if UNSET_USER */
      /* return an empty object */
      return {};
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default userReducer;
