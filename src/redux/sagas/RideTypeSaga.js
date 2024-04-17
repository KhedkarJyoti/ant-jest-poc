import axios 			from "axios";
import { put, takeEvery } 	from "redux-saga/effects";
import { ADD_RIDE_PACKAGE, ADD_RIDE_TYPE, API_URL, GET_PACKAGES, GET_RIDE_TYPES, SET_PACKAGES, SET_RIDE_PACKAGE, SET_RIDE_TYPE, SET_RIDE_TYPES } 	from "../constants/Constants";
import { json } from "react-router";

function* getRideTypeList(){
	console.log("getPackageList Saga => ", )
	let data = yield fetch(API_URL + 'rideTypes')
	data = yield data.json();
	console.log("getPackageList res => ",data)
	yield put({
        type 			: SET_RIDE_TYPES,
        data 
    })
}

function* addRideType(payload){
	console.log("add package Saga => ", payload)
    var data;
	yield fetch(API_URL + 'rideTypes', {
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
		type 			: SET_RIDE_TYPE,
		data 
	})

}

export default function* RideTypeSaga(){

    yield takeEvery(GET_RIDE_TYPES, getRideTypeList);
    yield takeEvery(ADD_RIDE_TYPE, addRideType);

}