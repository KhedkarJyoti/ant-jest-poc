import { SET_RIDE_TYPE, SET_RIDE_TYPES } from "../constants/Constants";
const initialState = {
    rideTypes : []
}

export const rideTypesData = (state = initialState, action)=>{
    console.log(" rideTypesData reducer action type => ",action.type, action.data)

    switch (action.type) {
        case SET_RIDE_TYPES:
            return {
                ...state,
                rideTypes : action.data
            } 
        case SET_RIDE_TYPE:
            return {
                ...state,
                isRideTypeAdded : true
            }      
        default:
            return state;
    }
}