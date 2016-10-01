import {combineReducers} from 'redux';

import loginForm from './loginForm';

import config from 'config';


const auth = combineReducers({
  hasPassword: (state=config.auth.hasPassword) => state,
  secret: (state=config.auth.secret) => state,
  loginForm,
});

export default auth;
