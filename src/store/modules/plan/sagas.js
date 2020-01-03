import { takeLatest, all, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import {
  savePlanSuccess,
  savePlanFailure,
  loadPlansFailure,
  loadPlansSuccess,
  deletePlanSuccess,
  deletePlanFailure,
} from './actions';
import history from '~/services/history';

export function* includePlan({ payload }) {
  try {
    console.tron.log(payload);
    const { id, title, duration, price } = payload;

    if (!id) {
      const response = yield call(api.post, 'plans', {
        title,
        duration,
        price,
      });

      yield put(savePlanSuccess(response.data));
    } else {
      const response = yield call(api.put, 'plans', {
        id,
        title,
        duration,
        price,
      });
      yield put(savePlanSuccess(response.data));
    }
    history.push('/plans');
    toast.success('Request finished successfuly!');
  } catch (err) {
    toast.error("There's been an error");

    yield put(savePlanFailure());
  }
}

export function* loadPlans() {
  try {
    const response = yield call(api.get, 'plans');

    yield put(loadPlansSuccess(response.data));
  } catch (err) {
    yield put(loadPlansFailure());
  }
}

export function* deletePlan({ payload }) {
  try {
    //  const { id } = payload;
    const id = payload;
    const response = yield call(api.delete, '/plans', { data: { id } });
    console.tron.log(response);

    yield put(deletePlanSuccess(payload));
    toast.success('Deletion finished successfully');
  } catch (err) {
    console.tron.log(err);
    yield put(deletePlanFailure());
    toast.error('Deletion failed, no data was altered');
  }
}

export default all([
  takeLatest('@plan/SAVE_REQUEST', includePlan),
  takeLatest('@plan/LOAD_PLANS_REQUEST', loadPlans),
  takeLatest('@plan/DELETE_REQUEST', deletePlan),
]);
