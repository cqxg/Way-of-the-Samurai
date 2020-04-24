import React from 'react';
import { connect } from 'react-redux';

import LoginReduxForm from './LoginForm';
import { login } from '../../redux/actions/actionCreators';

import { I18N } from '../../utils/constants';

const Login = (props) => {
  const onSubmit = (formData) => {
    const { email, password, rememberMe } = formData;
    props.login(email, password, rememberMe);
  };

  return (
    <div>
      <h1>{I18N.EN.LOGIN}</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect(null, { login })(Login);
