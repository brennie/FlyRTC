import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import LoginForm from './components/loginForm';

import './style';


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<LoginForm />, document.getElementById('content'));
});
