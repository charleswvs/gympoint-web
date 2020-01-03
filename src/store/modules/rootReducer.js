import { combineReducers } from 'redux';
import auth from './auth/reducers';
import student from './student/reducers';

const reducers = combineReducers({ auth, student });

export default reducers;
