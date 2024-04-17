import { SET_VEHICLE_TYPE, SET_VEHICLE_TYPES } from "../constants/Constants";
const initialState = {
    vehicleTypes : []
}

export const vehicleTypesData = (state = initialState, action)=>{
    console.log(" vehicleTypesData reducer action type => ",action.type, action.data)

    switch (action.type) {
        case SET_VEHICLE_TYPES:
            return {
                ...state,
                vehicleTypes : action.data
            } 
        case SET_VEHICLE_TYPE:
            return {
                ...state,
                isVehicleTypeAdded : true
            }      
        default:
            return state;
    }
}