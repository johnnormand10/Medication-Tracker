const certainReducer = (state = {}, action) => {
    switch(action.type){
        case 'SET_TABLE' :
            return action.payload
    }

    return state;
}


export default certainReducer;


//GETTING THE DATA PROPERLY FOR ONE PERSON 