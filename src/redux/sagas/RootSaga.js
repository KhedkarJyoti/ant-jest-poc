import { all } from 'redux-saga/effects';
import AuthSaga from './AuthSaga';
import RideTypeSaga from './RideTypeSaga';
import VehicleTypeSaga from './VehicleTypeSaga';
import PackageSaga from './PackageSaga';
import VehicleSaga from './VehicleSaga';
import DriverSaga from './DriverSaga';

export default function* RootSaga() {
  yield all([
    AuthSaga(),
    RideTypeSaga(),
    VehicleTypeSaga(),
    PackageSaga(),
    VehicleSaga(),
    DriverSaga()
  ])
}