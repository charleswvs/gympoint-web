import { takeLatest, all, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { format } from 'date-fns';

import api from '~/services/api';
import {
  saveRegistrationSuccess,
  saveRegistrationFailure,
  loadRegistrationsSuccess,
  loadRegistrationsFailure,
} from './actions';
import history from '~/services/history';

export function* saveRegistration({ payload }) {
  try {
    const { student_id, plan_id, start_date } = payload;

    const response = yield call(api.post, 'registration/', {
      student_id,
      plan_id,
      start_date,
    });

    console.tron.log(response);
    yield put(saveRegistrationSuccess(response.data));

    history.push('/registrations');
    toast.success('Operation was successful!');
  } catch (err) {
    toast.error('Operation failed, check you data and try again');
    yield put(saveRegistrationFailure());
  }
}

export function* loadRegistrations() {
  try {
    const response = yield call(api.get, 'registration');

    yield put(
      loadRegistrationsSuccess(
        response.data.map(registration => {
          const start_date = new Date(registration.start_date);
          const end_date = new Date(registration.end_date);

          return {
            ...registration,
            start_date: format(start_date, 'MMMM dd yyyy'),
            end_date: format(end_date, 'MMMM dd yyyy'),
          };
        })
      )
    );
  } catch (err) {
    yield put(loadRegistrationsFailure);
  }
}

export default all([
  takeLatest('@registration/SAVE_REQUEST', saveRegistration),
  takeLatest('@registration/LOAD_REQUEST', loadRegistrations),
]);
