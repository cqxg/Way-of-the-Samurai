import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logout } from '../../redux/actions/thunks';

import Header from './Header';

class HeaderContainer extends Component {
  render() {
    const { props } = this;
    return <Header {...props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});


HeaderContainer.defaultProps = {
  setAuthUserData: PropTypes.func,
  getAuthUserData: PropTypes.func,
};

HeaderContainer.propTypes = {
  setAuthUserData: PropTypes.func,
  getAuthUserData: PropTypes.func,
};


export default connect(mapStateToProps, { logout })(HeaderContainer);
