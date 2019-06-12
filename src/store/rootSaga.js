import { all, call } from 'redux-saga/effects';
import _map from 'lodash/map';
import { watch as userWatch } from './userDuck';

export default function* Sagas() {
  yield all(_map([userWatch], saga => call(saga)));
}
