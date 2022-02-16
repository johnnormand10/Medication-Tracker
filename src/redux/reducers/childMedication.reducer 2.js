const childMedication = (state = [], action) => {
    /* switch statement that looks for and catches only SET_CHILD_MEDICATION */
    switch (action.type) {
        case 'SET_CHILD_MEDICATION' :
            /* if the case is SET_CHILD_MEDICATION return the data from the router and database */
            return action.payload;
        default:
            return state;
    }
}
export default childMedication;