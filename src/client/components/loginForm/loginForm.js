import React from 'react';

import './style';

const usernameValidationRe = /^[A-Za-z0-9_]*$/;
const onUsernameChanged = username => {
  const errors = [];
  if (!usernameValidationRe.test(username))
    errors.push('Usernames can only contain alphanumeric characters and underscores.');

  return errors;
};

const LoginForm = (props) => {
  const {
    disabled,
    errors,
    fields,
    hasPassword,
    setErrors,
    setField,
    submit,
  } = props;

  const passwordField = !hasPassword ? null : (
    <label>
      Password
      <input type="text"
             onChange={e => setField('password', e.target.value)}
             disabled={disabled} />
    </label>
  );

  return (
    <section className="login-form">
      <h2>FlyRTC</h2>
      <form onSubmit={submit}>
        <label>
          <span>Username</span>
          <input type="text"
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
        </label>
        {passwordField}
        <input type="submit"
               value="Login"
               disabled={disabled} />
      </form>
    </section>
  );
};


export default LoginForm;
