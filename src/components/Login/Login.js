import React from 'react';

import LoginReduxForm from './LoginForm';
import { I18N } from '../../utils/constants'

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData);
    };

    return (
        <div>
            <h1>{I18N.EN.LOGIN}</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
};

export default Login;
