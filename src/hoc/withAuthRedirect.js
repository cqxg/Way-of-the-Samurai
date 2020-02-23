import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const withAuthRedirect = () => {
  class RedirectComponent extends Component {
    render() {
      if (!this.props.isAuth) return <Redirect to="/login" />;
      return <Component {...this.props} />;
    }
  }

  return RedirectComponent;
};

withAuthRedirect.defaultProps = {
  isAuth: PropTypes.bool,
};

withAuthRedirect.propTypes = {
  isAuth: PropTypes.bool,
};

export default withAuthRedirect;