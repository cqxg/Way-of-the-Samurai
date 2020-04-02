import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = () => {
    return (
        <form>
            <div>
                <Field placeholder='login' component={'input'} />
            </div>
            <div>
                <Field placeholder='password' component={'input'} />
            </div>
            <div>
                <Field type='checkbox' component={'input'} /> remember me
                </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

export default LoginReduxForm;