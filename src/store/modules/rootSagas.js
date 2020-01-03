import { all } from 'redux-saga/effects';
import auth from './auth/sagas';
import student from './student/sagas';

export default function* rootSaga() {
  yield all([auth, student]);
}
