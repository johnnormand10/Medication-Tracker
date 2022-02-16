const activeEditInfo = (state = [], action) => {
    /* switch statement */
    switch(action.type){
        case 'SET_ACTIVE_INFO' :
            /* if the case is SET_ACTIVE_INFO */
            /* return the action.payload */
            return action.payload;
        case 'UPDATE_ACTIVE_STUDENT' :
            /* if the case is UPDATE_ACTIVE_STUDENT */
            /* return an object using the spread operator 
            of the current state and the new action.payload */
            return {
                ... state,
                ... action.payload,
            }
    }
    return state;
}

export default activeEditInfo; 