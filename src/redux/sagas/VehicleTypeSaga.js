import axios 			from "axios";
import { put, takeEvery } 	from "redux-saga/effects";
import { ADD_VEHICLE_TYPE, API_URL, GET_VEHICLE_TYPES, SET_VEHICLE_TYPES, SET_VEHICLE_TYPE } 	from "../constants/Constants";
import { json } from "react-router";



function* getVehicleTypesList(){
	console.log("getVehicleType Saga... ", )
	let data = yield fetch(API_URL + 'vehicleTypes')
	data = yield data.json();
	console.log("getvehicleType res => ",data)
	yield put({
        type 			: SET_VEHICLE_TYPES,
        data 
    })
}

function* addVehicleType(payload){
	console.log("add vehicle type => ", payload)
    var data;
	let resp = yield fetch(API_URL + 'vehicleTypes', {
					method: 'POST',
					headers: {'Content-Type' : 'application/json'},
					body: JSON.stringify(payload.data)
				})
				.then(response => {
                    // Check if the request was successful
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    // Parse the response as JSON
                    return response.json();
                })
                .then(resData => {
                    data = resData;
                });
    // let data = yield resp.json();
    console.log("vehicleType res",data)
	

	yield put({
		type 			: SET_VEHICLE_TYPE,
		data 
	})

}

export default function* VehicleTypeSaga(){

  yield takeEvery(GET_VEHICLE_TYPES, getVehicleTypesList);
  yield takeEvery(ADD_VEHICLE_TYPE, addVehicleType);

}