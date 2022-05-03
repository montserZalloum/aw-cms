export const globalActionTypes = {
    LOADING: "LOADING",
    ALERT: "ALERT",
}

export const isLoading = (isLoad) => {
    return {type: globalActionTypes.LOADING, payload: isLoad} 
};
export const alert = (payload) => {
    return {type: globalActionTypes.ALERT, payload} 
};