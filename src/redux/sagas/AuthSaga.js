import axios 			from "axios";
import { put, takeEvery } 	from "redux-saga/effects";
import { LOGIN_USER, API_URL, REGISTER_USER, SET_REGISTER_USER } 	from "../constants/Constants";



function* loginUser(data){
	console.log("login user Saga => ", data)
	let res = yield axios(API_URL + 'login', {
					method: 'POST',
					headers: {'Content-Type' : 'application/json'},
					body: JSON.stringify(data)
				})
				.then(res => {
					console.log("res => ",res)
					res.json()
				})
				.then(data => console.log(data.user));
	res = yield res.json();
	console.log("res => ",res)
		

}

function* registerUser(user){
	console.log("register user Saga => ", user)
	let data = yield axios(API_URL + 'users', {
					method: 'POST',
					headers: {'Content-Type' : 'application/json'},
					body: JSON.stringify(user.data)
				})
				.then((res) => {
					console.log("response => ",res)
				}).catch((error) => {
					console.log("error => ",error)
				});
	
	console.log("reg res",data)

	yield put({
		type 			: SET_REGISTER_USER,
		data 
	})
    // .then(data => console.log(data))
	// res = yield res.json();
		

}

export default function* AuthSaga(){

  yield takeEvery(LOGIN_USER, loginUser);
  yield takeEvery(REGISTER_USER, registerUser)

}