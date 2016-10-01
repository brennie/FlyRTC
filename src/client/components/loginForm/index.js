import {connect} from 'react-redux';

import {
  setLoginFormErrors,
  submitLoginForm,
  updateLoginFormFields,
} from '../../actions/auth';
import LoginForm from './loginForm';


const mapStateToProps = state => ({
  disabled: state.auth.loginForm.disabled,
  errors: state.auth.loginForm.errors,
  fields: state.auth.loginForm.fields,
  hasPassword: state.auth.hasPassword,  
});

const mapDispatchToProps = dispatch => ({
  setField: (field, value) => dispatch(updateLoginFormFields({[field]: value})),
  setErrors: errors => dispatch(setLoginFormErrors(errors)),
  submit: event => {
    event.preventDefault();
    return dispatch(submitLoginForm())
  },
});

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm);
export default LoginFormContainer;
