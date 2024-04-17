import axios 			from "axios";
import { put, takeEvery } 	from "redux-saga/effects";
import { ADD_PACKAGE, API_URL, GET_PACKAGES, SET_PACKAGE, SET_PACKAGES } 	from "../constants/Constants";
import { json } from "react-router";

function* getPackagesList(){
	console.log("getPackageList Saga => ", )
	let data = yield fetch(API_URL + 'packages')
	data = yield data.json();
	console.log("getPackageList res => ",data)
	yield put({
        type 			: SET_PACKAGES,
        data 
    })
}

function* addPackage(payload){
	console.log("add package Saga => ", payload)
    var data;
	yield fetch(API_URL + 'packages', {
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
		type 			: SET_PACKAGE,
		data 
	})

}

export default function* PackageSaga(){

    yield takeEvery(GET_PACKAGES, getPackagesList);
    yield takeEvery(ADD_PACKAGE, addPackage);

}