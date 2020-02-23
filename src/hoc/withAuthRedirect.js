import React, { Component } from 'react';

export const withAuhRedirect = (Component) => {
    class RedirectComponent extends Component {
        render () {
            if (!this.props.isAuth) return <Redirect to="/login" />;
            return <Component {...this.props} />
        };
    };

    return RedirectComponent;
};