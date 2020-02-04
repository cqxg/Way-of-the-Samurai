import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';

import { MAIN_URL } from '../../utils/url-utils';
import { setAuthUserData } from '../../redux/actions/actionCreators';

import Header from './Header';

class HeaderContainer extends Component {
  componentDidMount() {
    axios.get(`${MAIN_URL}auth/me`, {
      withCredentials: true,
    })
      .then((response) => {
        const { props } = this;
        if (response.data.resultCode === 0) {
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
