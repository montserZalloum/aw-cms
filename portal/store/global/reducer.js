import {globalActionTypes} from './action';

const initialState = {
    isLoading : false,
    alert: {
        message: '',
        isSuccess: false,
    }
}

export default function reducer(state = initialState,action) {
    
    switch(action.type){
        case globalActionTypes.LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case globalActionTypes.ALERT:
            return {
                ...state,
                alert: {
                    message:    action.payload.message,
                    isSuccess:  action.payload.status,
                }
            }
        default:
            return state;
    }    
}