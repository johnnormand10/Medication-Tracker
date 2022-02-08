const invite = (state =[], action) => {
    switch (action.type) {
        case 'SET_INVITE' :
            return action.payload
        default:
            return state;
    }
}

export default invite;