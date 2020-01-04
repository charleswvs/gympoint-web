import { combineReducers } from 'redux';
import auth from './auth/reducers';
import student from './student/reducers';
import plan from './plan/reducers';
import registration from './registration/reducers';

const reducers = combineReducers({ auth, student, plan, registration });

export default reducers;
