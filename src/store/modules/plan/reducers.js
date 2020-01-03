import produce from 'immer';

const INITIAL_STATE = {
  plans: [],
  loading: false,
};

export default function(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@plan/SAVE_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@plan/SAVE_SUCCESS': {
        if (!action.payload.id) {
          draft.plans.push(action.payload);
        } else {
          const index = draft.plans.findIndex(
            plan => plan.id === action.payload.id
          );

          draft.plan[index] = action.payload;
        }

        draft.loading = false;
        break;
      }
      case '@plan/SAVE_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@plan/LOAD_PLANS_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@plan/LOAD_PLANS_SUCCESS': {
        draft.plans = action.payload;
        draft.loading = false;
        break;
      }
      case '@plan/LOAD_PLANS_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@plan/DELETE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@plan/DELETE_SUCCESS': {
        const index = draft.plans.findIndex(plan => plan.id === action.payload);

        draft.plans.splice(index, 1);
        draft.loading = false;
        break;
      }
      case '@plan/DELETE_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
        break;
    }
  });
}
