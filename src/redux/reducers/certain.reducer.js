const certainReducer = (state = [], action) => {
    switch(action.type){
        case 'SET_TABLE' :
            return action.payload;
        default :
            return state;
    }
}

export default certainReducer;