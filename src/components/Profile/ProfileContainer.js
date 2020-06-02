import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import {
  getUserProfile,
  getStatus,
  updateStatus,
  savePhoto,
  saveProfile,
} from '../../redux/actions/thunks';
import { ROUTES } from '../../utils/url-utils';

import Profile from './Profile';

class ProfileContainer extends Component {
  profileUpdate = () => {
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

  componentDidMount() {
    this.profileUpdate();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.profileUpdate();
    }
  }

  render() {
    const {
      profile,
      status,
      updateStatus,
      savePhoto,
      match,
    } = this.props;

    return (
      <Profile
        {...this.props}
        savePhoto={savePhoto}
        profile={profile}
        status={status}
        updateStatus={updateStatus}
        isOwner={!match.params.userId}
      />
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
  connect(mapStateToProps, {
    getUserProfile, getStatus, updateStatus, savePhoto, saveProfile,
  }),
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
