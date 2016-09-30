export const SET_LOGIN_FORM_ERRORS = 'SET_LOGIN_FORM_ERRORS';
export const setLoginFormErrors = errors => ({
  type: SET_LOGIN_FORM_ERRORS,
  errors,
});

export const SET_USERNAME = 'SET_USERNAME';
export const setUsername = username => ({
  type: SET_USERNAME,
  username,
});


export const SUBMIT_LOGIN_FORM = 'SUBMIT_LOGIN_FORM';
export const submitLoginForm = () => ({
  type: SUBMIT_LOGIN_FORM,
});
