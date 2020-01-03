import { combineReducers } from 'redux';
import auth from './auth/reducers';
import student from './student/reducers';
import plan from './plan/reducers';

const reducers = combineReducers({ auth, student, plan });

export default reducers;
