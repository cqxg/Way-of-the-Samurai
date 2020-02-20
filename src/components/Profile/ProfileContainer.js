import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { usersAPI } from '../../api/api';
import { DEFAULT_USER_ID } from '../../utils/constants';
import { setUserProfile } from '../../redux/actions/actionCreators';

import Profile from './Profile';

class ProfileContainer extends Component {
  componentDidMount() {
    const { props } = this;
    let { userId } = props.match.params;

    if (!userId) {
      userId = DEFAULT_USER_ID;
    }
    usersAPI.getProfile(userId).then((response) => { props.setUserProfile(response.data); });
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
  setUserProfile: PropTypes.func,
  profile: PropTypes.instanceOf(Object),
};

ProfileContainer.propTypes = {
  match: PropTypes.instanceOf(Object),
  setUserProfile: PropTypes.func,
  profile: PropTypes.instanceOf(Object),
};

export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent);
