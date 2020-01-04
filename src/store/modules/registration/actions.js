export function saveRegistrationRequest(data) {
  return {
    type: '@registration/SAVE_REQUEST',
    payload: data,
  };
}

export function saveRegistrationSuccess(registration) {
  return {
    type: '@registration/SAVE_SUCCESS',
    payload: registration,
  };
}

export function saveRegistrationFailure() {
  return {
    type: '@registration/SAVE_FAILURE',
  };
}

export function loadRegistrationsRequest() {
  return {
    type: '@registration/LOAD_REQUEST',
  };
}

export function loadRegistrationsSuccess(registrations) {
  return {
    type: '@registration/LOAD_SUCCESS',
    payload: registrations,
  };
}

export function loadRegistrationsFailure() {
  return {
    type: '@registration/LOAD_FAILURE',
  };
}
