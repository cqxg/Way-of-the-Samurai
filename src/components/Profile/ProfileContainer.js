import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import { DEFAULT_USER_ID } from '../../utils/constants';
import { getUserProfile } from '../../redux/actions/actionCreators';

import Profile from './Profile';

class ProfileContainer extends Component {
  componentDidMount() {
    const { props } = this;
    let { userId } = props.match.params;

    if (!userId) {
      userId = DEFAULT_USER_ID;
    }
    props.getUserProfile(userId);
  }

  render() {
    const { profile, isAuth } = this.props;

    if (isAuth === false) return <Redirect to="/login" />;

    return (
      <Profile {...this.props} profile={profile} />
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
});

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

ProfileContainer.defaultProps = {
  match: PropTypes.instanceOf(Object),
  profile: PropTypes.instanceOf(Object),
  setUserProfile: PropTypes.func,
  getUserProfile: PropTypes.func,
  isAuth: PropTypes.bool,
};

ProfileContainer.propTypes = {
  match: PropTypes.instanceOf(Object),
  profile: PropTypes.instanceOf(Object),
  setUserProfile: PropTypes.func,
  getUserProfile: PropTypes.func,
  isAuth: PropTypes.bool,
};

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);
