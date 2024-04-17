import {
    ADD_PACKAGE,
    GET_PACKAGES
} from "../constants/Constants";
  
export const getPackagesList = (data) => {
    console.log("getPackageList action is called => ",data);
    return{
        type: GET_PACKAGES,
        data
    }
}

export const addPackage = (data) => {
    console.log("action is called => ",data);
    return{
        type: ADD_PACKAGE,
        data
    
    }
}
