import axios 			from "axios";
import { put, takeEvery } 	from "redux-saga/effects";
import { ADD_VEHICLE, API_URL, GET_VEHICLES, SET_VEHICLE, SET_VEHICLES } 	from "../constants/Constants";
import { json } from "react-router";

function* getVehiclesList(){
	console.log("getVehiclesList Saga => ", )
	let data = yield fetch(API_URL + 'vehicles')
	data = yield data.json();
	console.log("getVehiclesList res => ",data)
	yield put({
        type 			: SET_VEHICLES,
        data 
    })
}

function* addVehicle(payload){
	console.log("add Vehicle Saga => ", payload)
    var data;
	yield fetch(API_URL + 'vehicles', {
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
    console.log("package res",data)
	

	yield put({
		type 			: SET_VEHICLE,
		data 
	})

}

export default function* VehicleSaga(){

    yield takeEvery(GET_VEHICLES, getVehiclesList);
    yield takeEvery(ADD_VEHICLE, addVehicle);

}