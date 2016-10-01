import {
  SET_LOGIN_FORM_ERRORS,
  SUBMIT_LOGIN_FORM,
  UPDATE_LOGIN_FORM_FIELDS,
} from '../../actions/auth';


const initialState = {
  disabled: false,
  errors: new Map(),
  fields: new Map(Object.entries({
    username: '',
    password: '',
  })),
};

const loginForm = (state=initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_FORM_ERRORS:
      return {
        ...state,
        disabled: false,
        errors: action.errors,
      };

    case SUBMIT_LOGIN_FORM:
      return {
        ...state,
        disabled: true,
        errors: new Map(),
      };

    case UPDATE_LOGIN_FORM_FIELDS:
      return {
        ...state,
        fields: new Map([
          ...state.fields.entries(),
          ...Object.entries(action.fields),
        ]),
      };

    default:
      return state;
  }
};

export default loginForm;
