import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import createStore from './createStore';
import LoginFormContainer from './components/loginForm';
import reducer from './reducers';
import './style';

const store = createStore(reducer, {});


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <LoginFormContainer />
    </Provider>,
    document.getElementById('content'));
});
