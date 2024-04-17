import { ADD_DRIVER, GET_DRIVERS } from "../constants/Constants";
  
export const getDriversList = (data) => {
    console.log("getDriversList action is called => ",data);
    return{
        type: GET_DRIVERS,
        data
    }
}

export const addDriver = (data) => {
    console.log("action is called => ",data);
    return{
        type: ADD_DRIVER,
        data
    
    }
}
