import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { login } from '../../redux/actions/thunks';
import { ROUTES } from '../../utils/url-utils';

import LoginReduxForm from './LoginForm';

const Login = (props) => {
  const { t } = useTranslation();

  const onSubmit = (formData) => {
    const { email, password, rememberMe } = formData;
    props.login(email, password, rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={ROUTES.PROFILE} />;
  }

  return (
    <div>
      <h1>{t('LOGIN')}</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
