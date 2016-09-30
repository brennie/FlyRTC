import {connect} from 'react-redux';

import {setLoginFormErrors, setUsername, submitLoginForm} from '../../actions/auth';
import LoginForm from './loginForm';


const mapStateToProps = state => ({
  disabled: state.auth.loginForm.disabled,
  username: state.auth.loginForm.username,
  errors: state.auth.loginForm.errors,
});

const mapDispatchToProps = dispatch => ({
  setUsername: username => dispatch(setUsername(username)),
  setErrors: errors => dispatch(setLoginFormErrors(errors)),
  submit: event => {
    event.preventDefault();
    return dispatch(submitLoginForm())
  },
});

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm);
export default LoginFormContainer;
