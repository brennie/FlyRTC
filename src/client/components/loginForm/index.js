import React from 'react';

import './style';


const LoginForm = () => (
  <section className="login-form">
    <h2>FlyRTC</h2>
    <form onSubmit={e => e.preventDefault()}>
      <label htmlFor="login-form__username">
        Username
      </label>
      <input type="text"
             id="login-form__username" />
      <input type="submit"
             value="Login" />
    </form>
  </section>
);

export default LoginForm;
