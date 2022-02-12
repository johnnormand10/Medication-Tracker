const activeEditInfo = (state = [], action) => {
    switch(action.type){
        case 'SET_ACTIVE_INFO' :
            return action.payload;
        case 'UPDATE_ACTIVE_STUDENT' :
            return {
                ... state,
                ... action.payload,
            }
    }
    return state;
}

export default activeEditInfo; 