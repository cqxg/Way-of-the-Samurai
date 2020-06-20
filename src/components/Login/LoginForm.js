import React from 'react';
import { reduxForm } from 'redux-form';
import { useTranslation } from 'react-i18next';

import { required } from '../../utils/validators';
import { I18N_KEYS } from '../../utils/constants';
import { Input } from '../../utils/FormControl/formsControls';
import { createField } from '../../utils/FormControl/formsControls';

import style from '../../utils/FormControl/formsControls.module.css';

const LoginForm = (props) => {
  const { t } = useTranslation();
  const { handleSubmit, error, captchaUrl } = props;

  return (
    <form onSubmit={handleSubmit}>
      {createField("Email", "email", [required], Input)}
      {createField("Password", "password", [required], Input, { type: "password" })}
      {createField(null, "rememberMe", [], Input, { type: "checkbox" }, "remember me")}

      {captchaUrl && <img src={captchaUrl} />}
      {captchaUrl && createField("Symbols from image", "captcha", [required], Input, {})}

      {error && (
        <div className={style.formSummaryError}>
          {error}
        </div>
      )}

      <div>
        <button>{t(I18N_KEYS.LOGIN)}</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

export default (LoginReduxForm);