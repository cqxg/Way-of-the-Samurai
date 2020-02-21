import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { WELL } from '../../utils/constants';
import { authAPI } from '../../api/api';
import { setAuthUserData } from '../../redux/actions/actionCreators';

import Header from './Header';

class HeaderContainer extends Component {
  componentDidMount() {
    authAPI.me().then((response) => {
      const { props } = this;
      if (response.data.resultCode === WELL) {
        const { id, email, login } = response.data.data;
        props.setAuthUserData(id, email, login);
      }
    });
  }

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
};

HeaderContainer.propTypes = {
  setAuthUserData: PropTypes.func,
};


export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
