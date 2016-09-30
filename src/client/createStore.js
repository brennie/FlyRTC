import {createStore as createReduxStore, compose} from 'redux';

let createStore;

if (process.env.NODE_ENV === 'production')
  createStore = createReduxStore;
else
  createStore = (reducer, initialState, enhancer) => createReduxStore(
    reducer,
    initialState,
    compose(
      enhancer ? enhancer : e => e,
      window.devToolsExtension ? window.devToolsExtension() : e => e
    )
  );

export default createStore;
