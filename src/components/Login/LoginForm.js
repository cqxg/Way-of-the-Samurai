import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field placeholder="login" name="login" component="input" />
      </div>
      <div>
        <Field placeholder="password" name="password" component="input" />
      </div>
      <div>
        <Field type="checkbox" name="rememberMe" component="input" />
        <span>remember me</span>
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

export default LoginReduxForm;
