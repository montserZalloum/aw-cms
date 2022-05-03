import {userActionTypes} from './action';

const initialState = {
    user : 'moon'
}

export default function reducer(state = initialState,action) {
    switch(action.type){
        case userActionTypes.SET_NAME:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }    
}