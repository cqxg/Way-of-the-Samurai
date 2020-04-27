import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { useTranslation } from 'react-i18next';

import { required } from '../../utils/validators';
import { Input } from '../../utils/FormControl/formsControls';

const LoginForm = (props) => {
    const { t } = useTranslation();
    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={t('EMAIL')} name="email" component={Input} validate={[required]} />
            </div>
            <div>
                <Field placeholder={t('PASSWORD')} name="password" component={Input} validate={[required]} />
            </div>
            <div>
                <Field name="rememberMe" type="checkbox" component="input" />
                <span>{t('REMEMBER_ME')}</span>
            </div>
            <div>
                <button>{t('LOGIN')}</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

export default LoginReduxForm;
