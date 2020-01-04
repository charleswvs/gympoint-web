import produce from 'immer';

const INITIAL_STATE = {
  registrations: [],
  loading: false,
};

export default function(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@registration/SAVE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@registration/SAVE_SUCCESS': {
        draft.loading = true;
        break;
      }
      case '@registration/SAVE_FAILURE': {
        draft.loading = true;
        break;
      }
      case '@registration/LOAD_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@registration/LOAD_SUCCESS': {
        console.tron.log(action.payload);
        draft.registrations = action.payload;
        draft.loading = false;
        break;
      }
      case '@registration/LOAD_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
        break;
    }
  });
}
