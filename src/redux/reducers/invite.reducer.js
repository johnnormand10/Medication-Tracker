const invite = (state =[], action) => {
    /* switch statement */
    switch (action.type) {
        case 'SET_INVITE' :
            /* if the case is SET_INVITE */
            /* return the action.payload from the database */
            return action.payload
        default:
            return state;
    }
}

export default invite;