export function savePlanRequest(data) {
  return {
    type: '@plan/SAVE_REQUEST',
    payload: data,
  };
}

export function savePlanSuccess(plan) {
  return {
    type: '@plan/SAVE_SUCCESS',
    payload: plan,
  };
}

export function savePlanFailure() {
  return {
    type: '@plan/SAVE_FAILURE',
  };
}

export function loadPlansRequest() {
  return {
    type: '@plan/LOAD_PLANS_REQUEST',
  };
}

export function loadPlansSuccess(plans) {
  return {
    type: '@plan/LOAD_PLANS_SUCCESS',
    payload: plans,
  };
}

export function loadPlansFailure() {
  return {
    type: '@plan/LOAD_PLANS_SUCCESS',
  };
}

export function deletePlanRequest(id) {
  return {
    type: '@plan/DELETE_REQUEST',
    payload: id,
  };
}

export function deletePlanSuccess(id) {
  return {
    type: '@plan/DELETE_SUCCESS',
    payload: id,
  };
}

export function deletePlanFailure() {
  return {
    type: '@plan/DELETE_FAILURE',
  };
}
