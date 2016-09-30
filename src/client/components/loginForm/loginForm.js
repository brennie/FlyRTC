import React from 'react';

import './style';

const usernameValidationRe = /^[A-Za-z0-9_]*$/;
const onUsernameChanged = username => new Promise((resolve, reject) => {
  if (!usernameValidationRe.test(username))
    reject([
      'Usernames can only contain alphanumeric characters and underscores.',
    ]);

  resolve(username);
});

const LoginForm = ({disabled, username, submit, setUsername, setErrors}) => (
  <section className="login-form">
    <h2>FlyRTC</h2>
    <form onSubmit={submit}>
      <label htmlFor="login-form__username">
        Username
      </label>
      <input type="text"
             id="login-form__username"
             value={username}
             onChange={(e) => onUsernameChanged(e.target.value).then(setUsername, setErrors)}
             disabled={disabled} />
      <input type="submit"
             value="Login"
             disabled={disabled} />
    </form>
  </section>
);


export default LoginForm;
