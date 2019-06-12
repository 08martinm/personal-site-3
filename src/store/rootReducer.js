import { combineReducers } from 'redux';
import user from './userDuck';

const appReducer = combineReducers({ user });
export default appReducer;
