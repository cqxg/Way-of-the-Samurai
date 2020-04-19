import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { required } from '../../utils/validators';
import { Input } from '../../utils/FormControl/formsControls';
import { I18N } from '../../utils/constants';

const LoginForm = (props) => {
    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder="login" name="login" component={Input} validate={[required]} />
            </div>
            <div>
                <Field placeholder="password" name="password" component={Input} validate={[required]} />
            </div>
            <div>
                <Field name="rememberMe" component='input' type="checkbox" />
                <span>{I18N.EN.REMEMBER_ME}</span>
            </div>
            <div>
                <button>{I18N.EN.LOGIN}</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

export default LoginReduxForm;
