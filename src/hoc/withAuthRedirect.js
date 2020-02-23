import React, { Component } from 'react';
import { Redirect } from 'react-dom';

const withAuthRedirect = (Component) => {
    class RedirectComponent extends Component {
        render() {
            if (!this.props.isAuth) return <Redirect to="/login" />;
            return <Component {...this.props} />
        };
    };

    return RedirectComponent;
};

export default withAuthRedirect;