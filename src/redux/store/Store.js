import { configureStore }   from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import RootReducer          from "../reducers/RootReducer";
import RootSaga             from "../sagas/RootSaga";

const sagaMiddleware = createSagaMiddleware();
const Store = configureStore({
    reducer    : RootReducer,
    middleware : ()=>[sagaMiddleware]
});

sagaMiddleware.run(RootSaga);

export default Store;