import { SET_PACKAGE, SET_PACKAGES } from "../constants/Constants";
const initialState = {
    packages : []
}

export const packagesData = (state = initialState, action)=>{
    console.log(" packagesData reducer action type => ",action.type, action.data)

    switch (action.type) {
        case SET_PACKAGES:
            return {
                ...state,
                packages : action.data
            } 
        case SET_PACKAGE:
            return {
                ...state,
                isPackageAdded : true
            }      
        default:
            return state;
    }
}