export const SET_LOGIN_FORM_ERRORS = 'SET_LOGIN_FORM_ERRORS';
export const setLoginFormErrors = errors => ({
  type: SET_LOGIN_FORM_ERRORS,
  errors,
});

export const UPDATE_LOGIN_FORM_FIELDS = 'UPDATE_LOGIN_FORM_FIELDS';
export const updateLoginFormFields = fields => ({
  type: UPDATE_LOGIN_FORM_FIELDS,
  fields,
});


export const SUBMIT_LOGIN_FORM = 'SUBMIT_LOGIN_FORM';
export const submitLoginForm = () => ({
  type: SUBMIT_LOGIN_FORM,
});
