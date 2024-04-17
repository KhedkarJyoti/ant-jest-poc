import {
    ADD_RIDE_TYPE,
    GET_RIDE_TYPES
} from "../constants/Constants";
  
export const getRideTypesList = (data) => {
    console.log("getPackageList action is called => ",data);
    return{
        type: GET_RIDE_TYPES,
        data
    }
}

export const addRideType = (data) => {
    console.log("action is called => ",data);
    return{
        type: ADD_RIDE_TYPE,
        data
    
    }
}
