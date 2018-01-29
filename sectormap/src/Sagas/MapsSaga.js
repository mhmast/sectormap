import {put} from 'redux-saga/effects';
import {delay} from "redux-saga";
import {testAction} from '../Actions/MapActions';

export function* test(text) 
{
    yield delay(1000);
    yield put(testAction(text));
}