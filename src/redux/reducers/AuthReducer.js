import { LOGIN_USER, REGISTER_USER, SET_REGISTER_USER } from "../constants/Constants";
const initialState = {
    isRegistered : false,
    user         : {}
}
export const userAuth = (state = initialState, action)=>{
    console.log(" reducer action type => ",action.type, action.data)

    switch (action.type) {
        case SET_REGISTER_USER:
            return {
                ...state,
                isRegistered : action.data ? true : false
            }    
        case LOGIN_USER:
            return [action.data, ...state];    
        // case EMPTY_CART:
        //     data = [];
        //     return [...data];    
        default:
            return state;
    }
}