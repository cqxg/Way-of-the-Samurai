import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';

import { MAIN_URL } from '../../utils/url-utils';
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

    axios.get(`${MAIN_URL}profile/${userId}`)
      .then((response) => {
        props.setUserProfile(response.data);
      });
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
  match: PropTypes.object,
  setUserProfile: PropTypes.func,
  profile: PropTypes.object,
};

ProfileContainer.propTypes = {
  match: PropTypes.object,
  setUserProfile: PropTypes.func,
  profile: PropTypes.object,
};

export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent);
