const initialState = {
    traduction: false
}

function rootReducer(state = initialState, action){

    switch (action.type) {
        case 'CHANGE_STATE':
            return {
                ...state, 
                traduction: !state.traduction
            }
    
        default:
            return state;
    }
}


export default rootReducer