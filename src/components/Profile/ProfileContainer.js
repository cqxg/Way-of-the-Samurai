import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
    const { profile } = this.props;

    return (
      <Profile {...this.props} profile={profile} />
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

ProfileContainer.defaultProps = {
  match: PropTypes.instanceOf(Object),
  profile: PropTypes.instanceOf(Object),
  setUserProfile: PropTypes.func,
  getUserProfile: PropTypes.func,
};

ProfileContainer.propTypes = {
  match: PropTypes.instanceOf(Object),
  profile: PropTypes.instanceOf(Object),
  setUserProfile: PropTypes.func,
  getUserProfile: PropTypes.func,
};

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);
