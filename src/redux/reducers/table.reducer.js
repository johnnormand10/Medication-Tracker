const tableReducer = (state = [], action) => {
    /* switch statement */
    switch(action.type) {
        case 'SET_DATA' :
            /* if the case is SET_DATA */
            /* return the payload form the database */
            return action.payload;
        default : 
        return state;
    }
}

export default tableReducer; 