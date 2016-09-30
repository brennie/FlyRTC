import {
  SET_LOGIN_FORM_ERRORS,
  SET_USERNAME,
  SUBMIT_LOGIN_FORM,
} from '../actions/auth';

const initialState = {
  loginForm: {
    disabled: false,
    errors: [],
    username: '',
  },
};

const auth = (state=initialState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          username: action.username,
        },
      };

    case SET_LOGIN_FORM_ERRORS:
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          disabled: false,
          errors: action.errors,
        },
      };

    case SUBMIT_LOGIN_FORM:
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          disabled: true,
          errors: [],
        },
      };

    default:
      return initialState;
  }
};

export default auth;
