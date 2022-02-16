const names = (state = [], action) => {
    /* switch statement */
    switch(action.type){
        case 'SET_NAMES' :
            /* if the case is SET_NAMES */
            /* return the payload from the database */
            return action.payload;
        default :
            return state;
    }
}

export default names;