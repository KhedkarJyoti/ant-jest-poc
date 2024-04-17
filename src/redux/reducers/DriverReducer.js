import { SET_DRIVER, SET_DRIVERS } from "../constants/Constants";
const initialState = {
    drivers : []
}

export const driversData = (state = initialState, action)=>{
    console.log(" driversData reducer action type => ",action.type, action.data)

    switch (action.type) {
        case SET_DRIVERS:
            return {
                ...state,
                drivers : action.data
            } 
        case SET_DRIVER:
            return {
                ...state,
                isDriverAdded : true
            }      
        default:
            return state;
    }
}