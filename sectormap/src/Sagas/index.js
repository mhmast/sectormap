import { all } from 'redux-saga/effects'
import * as MapsSaga from './MapsSaga';

export default function* RootSaga(){
yield all(MapsSaga);
}