import {
    GET_VEHICLE_TYPES,
    ADD_VEHICLE_TYPE
} from "../constants/Constants";
  
export const getVehicleTypes = (data) => {
    console.log("getVehicleTypes action is called...");
    return{
        type: GET_VEHICLE_TYPES,
        data
    }
}

export const addVehicleType = (data) => {
    console.log("action is called => ",data);
    return{
        type: ADD_VEHICLE_TYPE,
        data
    
    }
}
