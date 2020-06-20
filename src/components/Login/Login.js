import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { login } from '../../redux/actions/thunks';
import { ROUTES } from '../../utils/url-utils';
import { I18N_KEYS } from '../../utils/constants';

import LoginReduxForm from './LoginForm';

const Login = (props) => {
  const { t } = useTranslation();
  const { login, isAuth, captchaUrl } = props;

  const onSubmit = (formData) => {
    const { email, password, rememberMe, captcha } = formData;
    login(email, password, rememberMe, captcha);
  };

  if (isAuth) {
    return <Redirect to={ROUTES.PROFILE} />;
  }

  return (
    <div>
      <h1>{t(I18N_KEYS.LOGIN)}</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});

export default connect(mapStateToProps, { login })(Login);
