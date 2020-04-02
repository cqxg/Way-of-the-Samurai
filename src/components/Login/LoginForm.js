import React from 'react';
import { reduxForm } from 'redux-form';

const LoginForm = () => {
    return (
        <form>
            <div>
                <input placeholder='login' />
            </div>
            <div>
                <input placeholder='password' />
            </div>
            <div>
                <input type='checkbox' /> remember me
                </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

export default LoginReduxForm;