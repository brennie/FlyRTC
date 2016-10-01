import React from 'react';

import './style';

const usernameValidationRe = /^[A-Za-z0-9_]*$/;
const onUsernameChanged = username => {
  const errors = [];
  if (!usernameValidationRe.test(username))
    errors.push('Usernames can only contain alphanumeric characters and underscores.');

  return errors;
};

const LoginForm = ({disabled, fields, submit, setField, setErrors}) => (
  <section className="login-form">
    <h2>FlyRTC</h2>
    <form onSubmit={submit}>
      <label htmlFor="login-form__username">
        Username
      </label>
      <input type="text"
             id="login-form__username"
             value={fields.get('username')}
             onChange={e => {
               const username = e.target.value;
               const errors = onUsernameChanged(username);

               if (errors.length) {
                 setErrors('username', errors);
               }
               else
                 setField('username', username);
             } }
             disabled={disabled} />
      <input type="submit"
             value="Login"
             disabled={disabled} />
    </form>
  </section>
);


export default LoginForm;
