import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth,
});

const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      const { props } = this;
      if (!props.isAuth) return <Redirect to="/login" />;
      return <Component {...props} />;
    }
  }

  return connect(mapStateToPropsForRedirect)(RedirectComponent);
};

export default withAuthRedirect;
