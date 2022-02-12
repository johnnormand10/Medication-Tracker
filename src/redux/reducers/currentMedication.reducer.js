const currentMedication = (state = {}, action) => {
    switch(action.type){
        case 'SET_MEDICATION' :
            return action.payload;
    }

    return state;

}

export default currentMedication;