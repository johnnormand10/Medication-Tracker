const currentMedication = (state = {}, action) => {
    switch(action.type){
        case 'SET_MEDICATION' :
            console.log('action.payload is,', action.payload);
            
            return action.payload;
    }

    return state;

}

export default currentMedication;