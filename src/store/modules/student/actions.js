export function saveStudentRequest(data) {
  return {
    type: '@student/SAVE_REQUEST',
    payload: data,
  };
}

export function saveStudentSuccess(student) {
  return {
    type: '@student/SAVE_SUCCESS',
    payload: student,
  };
}

export function saveStudentFailure() {
  return {
    type: '@student/SAVE_FAILURE',
  };
}

export function loadStudentsRequest() {
  return {
    type: '@student/LOAD_STUDENTS_REQUEST',
  };
}

export function loadStudentsSuccess(students) {
  return {
    type: '@student/LOAD_STUDENTS_SUCCESS',
    payload: students,
  };
}

export function deleteStudentRequest(id) {
  return {
    type: '@student/DELETE_REQUEST',
    payload: id,
  };
}

export function deleteStudentSuccess(id) {
  return {
    type: '@student/DELETE_SUCCESS',
    payload: id,
  };
}

export function deleteStudentFailure() {
  return {
    type: '@student/DELETE_SUCCESS',
  };
}
