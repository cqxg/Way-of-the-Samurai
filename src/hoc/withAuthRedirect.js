import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth,
});

const withAuthRedirect = () => {
  class RedirectComponent extends Component {
    render() {
      const { props } = this;
      if (!props.isAuth) return <Redirect to="/login" />;
      return <Component {...props} />;
    }
  }

  const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

  return ConnectedAuthRedirectComponent;
};

export default withAuthRedirect;
