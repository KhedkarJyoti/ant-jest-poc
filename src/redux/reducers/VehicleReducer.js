import { SET_VEHICLE, SET_VEHICLES } from "../constants/Constants";
const initialState = {
    vehicles : []
}

export const vehiclesData = (state = initialState, action)=>{
    console.log(" vehiclesData reducer action type => ",action.type, action.data)

    switch (action.type) {
        case SET_VEHICLES:
            return {
                ...state,
                vehicles : action.data
            } 
        case SET_VEHICLE:
            return {
                ...state,
                isVehicleAdded : true
            }      
        default:
            return state;
    }
}