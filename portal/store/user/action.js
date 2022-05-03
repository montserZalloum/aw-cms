export const userActionTypes = {
    SET_NAME: "SET_NAME",
}

export const setName = (name) => {
    return {type: userActionTypes.SET_NAME, payload: name} 
};