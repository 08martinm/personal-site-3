import { call, put, takeEvery } from 'redux-saga/effects';
import _get from 'lodash/get';
import { loginAPI, logoutAPI, getUserAPI } from '../api';

const genericAction = type => data => ({ data, type });
const promiseAction = type => (data, resolve, reject) => ({
  data,
  resolve,
  reject,
  type,
});

// ACTIONS
const LOGIN = 'user/LOGIN';
const LOGOUT = 'user/LOGOUT';
const SET_USER_DATA = 'user/SET_USER_DATA';
const GET_USER_DATA = 'user/GET_USER_DATA';
const CLEAR_USER_DATA = 'user/CLEAR_USER_DATA';
const GET_USER_FAILED = 'user/GET_USER_FAILED';
const EMAIL_VERIFIED = 'user/EMAIL_VERIFIED';

// Actions
export const setUserAction = genericAction(SET_USER_DATA);
export const emailVerifiedAction = genericAction(EMAIL_VERIFIED);
export const clearUserDataAction = genericAction(CLEAR_USER_DATA);
// Async actions
export const loginAction = promiseAction(LOGIN);
export const logoutAction = promiseAction(LOGOUT);
export const getUserDataAction = promiseAction(GET_USER_DATA);
export const getUserFailedAction = promiseAction(GET_USER_FAILED);

// STATE
const INITIAL_STATE = {
  isLoggedIn: false,
  firstName: '',
  lastName: '',
  email: '',
  description: '',
  emailVerified: false,
  fetchingUser: false,
};

// REDUCER
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_USER_DATA:
      return { ...state, fetchingUser: true };
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        fetchingUser: false,
        isLoggedIn: true,
      };
    case GET_USER_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        fetchingUser: false,
      };
    case EMAIL_VERIFIED:
      return { ...state, emailVerified: true };
    case CLEAR_USER_DATA:
    case LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
}

// SAGAS
function* loginSaga({ data, resolve, reject }) {
  try {
    const { data: response } = yield call(loginAPI, data);
    yield put(setUserAction(response));
    if (resolve) {
      resolve(response);
    }
  } catch (error) {
    if (reject) {
      reject(error);
    }
  }
}

function* getUserDataSaga({ resolve, reject }) {
  try {
    const { data: response } = yield call(getUserAPI);
    yield put(setUserAction(response));
    if (resolve) {
      resolve(response);
    }
  } catch (error) {
    yield put(getUserFailedAction());
    const errorMessage = _get(error, 'response.data.message');
    if (reject) reject(errorMessage);
  }
}

function* logoutSaga() {
  yield call(logoutAPI);
}

export function* watch() {
  yield takeEvery(LOGIN, loginSaga);
  yield takeEvery(LOGOUT, logoutSaga);
  yield takeEvery(GET_USER_DATA, getUserDataSaga);
}
