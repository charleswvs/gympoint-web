import { takeLatest, all, put, call } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import {
  saveStudentFailure,
  saveStudentSuccess,
  loadStudentsSuccess,
  deleteStudentFailure,
  deleteStudentSuccess,
} from './actions';
import history from '~/services/history';
import api from '~/services/api';

export function* includeStudent({ payload }) {
  try {
    const { id, name, email, age, weight, height } = payload;

    if (!id) {
      const response = yield call(api.post, 'students', {
        name,
        email,
        age,
        weight,
        height,
      });
      yield put(saveStudentSuccess(response.data));
    } else {
      const response = yield call(api.put, 'students/', {
        id,
        name,
        email,
        age,
        weight,
        height,
      });

      yield put(saveStudentSuccess(response.data));
    }

    history.push('/students');
    toast.success('Request finished successfuly!');
  } catch (err) {
    toast.error("There's been an error, please, verify your data ");

    yield put(saveStudentFailure());
  }
}

export function* getStudents() {
  try {
    const response = yield call(api.get, 'students');

    yield put(loadStudentsSuccess(response.data));
  } catch (err) {
    // TODO: show some data
  }
}

export function* deleteStudent({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, '/student', { id });
    yield put(deleteStudentSuccess(id));
    toast.success('Request finished successfuly!');
  } catch (err) {
    toast.error("There's been an error");
    yield put(deleteStudentFailure());
  }
}
export default all([
  takeLatest('@student/LOAD_STUDENTS_REQUEST', getStudents),
  takeLatest('@student/SAVE_REQUEST', includeStudent),
  takeLatest('@student/DELETE_REQUEST', deleteStudent),
]);
