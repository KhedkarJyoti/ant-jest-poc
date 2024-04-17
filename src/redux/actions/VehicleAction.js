import {
    ADD_VEHICLE,
    GET_VEHICLES
} from "../constants/Constants";
  
export const getVehiclesList = (data) => {
    console.log("getPackageList action is called => ",data);
    return{
        type: GET_VEHICLES,
        data
    }
}

export const addVehicle = (data) => {
    console.log("action is called => ",data);
    return{
        type: ADD_VEHICLE,
        data
    
    }
}
