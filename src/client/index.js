import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import createStore from './createStore';
import LoginFormContainer from './components/loginForm';
import reducer from './reducers';
import './style';


const secret = new URLSearchParams(location.search.slice(1)).get('secret');
const store = createStore(reducer, {
  auth: {secret},
});

/* Hide the secret so someone can't steal it by peering over your shoulder. */
history.replaceState(null, null, '/');

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <LoginFormContainer />
    </Provider>,
    document.getElementById('content'));
});
