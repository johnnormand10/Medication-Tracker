const childMedication = (state = [], action) => {
    switch (action.type) {
        case 'SET_CHILD_MEDICATION' :
            return action.payload
        default:
            return state;
    }
}
export default childMedication;