import produce from 'immer';

const INITIAL_STATE = {
  students: [],
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case '@student/SAVE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@student/SAVE_SUCCESS': {
        if (!action.payload.id) {
          draft.students.push(action.payload);
        } else {
          const index = draft.students.findIndex(
            student => student.id === action.payload.id
          );

          draft.students[index] = action.payload;
        }
        draft.loading = false;
        break;
      }
      case '@student/SAVE_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@student/LOAD_STUDENTS_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@student/LOAD_STUDENTS_SUCCESS': {
        draft.students = action.payload;
        break;
      }
      case '@student/DELETE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@student/DELETE_SUCCESS': {
        const index = draft.students.findIndex(
          student => student.id === action.payload.id
        );

        draft.students.splice(index, 1);
        draft.loading = false;
        break;
      }
      case '@student/DELETE_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
};
