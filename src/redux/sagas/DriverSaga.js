import axios 			from "axios";
import { put, takeEvery } 	from "redux-saga/effects";
import { ADD_DRIVER, API_URL, GET_DRIVERS, SET_DRIVER, SET_DRIVERS } 	from "../constants/Constants";
import { json } from "react-router";

function* getDriversList(){
	console.log("getDriversList Saga => ", )
	let data = yield fetch(API_URL + 'drivers')
	data = yield data.json();
	console.log("getDriversList res => ",data)
	yield put({
        type 			: SET_DRIVERS,
        data 
    })
}

function* addDriver(payload){
	console.log("add Driver Saga => ", payload)
    var data;
	yield fetch(API_URL + 'drivers', {
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
    console.log("driver res",data)
	

	yield put({
		type 			: SET_DRIVER,
		data 
	})

}

export default function* DriverSaga(){

    yield takeEvery(GET_DRIVERS, getDriversList);
    yield takeEvery(ADD_DRIVER, addDriver);

}