import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { getUserProfile, getStatus, updateStatus } from '../../redux/actions/thunks';
import { ROUTES } from '../../utils/url-utils';

import Profile from './Profile';

class ProfileContainer extends Component {
  componentDidMount() {
    const { props } = this;
    let { userId } = props.match.params;

    if (!userId) {
      userId = props.authorizedUserId;
      if (!userId) {
        props.history.push(ROUTES.LOGIN);
      }
    }

    props.getUserProfile(userId);
    props.getStatus(userId);
  }

  render() {
    const { profile, status, updateStatus } = this.props;

    return (
      <Profile {...this.props} profile={profile} status={status} updateStatus={updateStatus} />
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter,
)(ProfileContainer);

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
