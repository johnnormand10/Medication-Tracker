const currentMedication = (state = {}, action) => {
    /* switch statement that looks for and catches only SET_MEDICATION */
    switch(action.type){
        case 'SET_MEDICATION' :
            /* if the case is SET_MEDICATION return the data from the database */
            /* checking what action.payload is */
            console.log('action.payload is,', action.payload);
            
            return action.payload;
    }

    return state;

}

export default currentMedication;