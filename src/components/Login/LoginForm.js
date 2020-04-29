import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { useTranslation } from 'react-i18next';

import { required } from '../../utils/validators';
import { Input } from '../../utils/FormControl/formsControls';
import { I18N_KEYS } from '../../utils/constants';

import style from '../../utils/FormControl/formsControls.module.css';

const LoginForm = (props) => {
    const { t } = useTranslation();
    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={t(I18N_KEYS.EMAIL)} name="email" component={Input} validate={[required]} />
            </div>
            <div>
                <Field placeholder={t(I18N_KEYS.PASSWORD)} name="password" component={Input} validate={[required]} />
            </div>
            <div>
                <Field name="rememberMe" type="checkbox" component="input" />
                <span>{t(I18N_KEYS.REMEMBER_ME)}</span>
            </div>
            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>{t(I18N_KEYS.LOGIN)}</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

export default LoginReduxForm;
