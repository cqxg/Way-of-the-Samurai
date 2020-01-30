import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { PROFILE_URL } from '../../utils/url-utils';
import { setAuthUserData } from '../../redux/actions/actionCreators';

import Header from './Header';

class HeaderContainer extends Component {
  componentDidMount() {
    axios.get(`${PROFILE_URL}auth/me`, {
      withCredentials: true,
    })
      .then((response) => {
        if (response.data.resultCode === 0) {
          const { id, email, login } = response.data.data;
          this.props.setAuthUserData(id, email, login);
        }
      });
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
