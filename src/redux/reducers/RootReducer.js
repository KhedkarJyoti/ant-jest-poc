import { combineReducers } from "redux";
import { userAuth } from "./AuthReducer";
import { rideTypesData } from "./RideTypeReducer";
import { vehicleTypesData } from "./VehicleTypeReducer";
import { packagesData } from "./PackageReducer";
import { vehiclesData } from "./VehicleReducer";
import { driversData } from "./DriverReducer";

export default combineReducers({
  	userAuth,
    rideTypesData,
    vehicleTypesData,
    packagesData,
    vehiclesData,
    driversData
});