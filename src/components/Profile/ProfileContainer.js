import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import { MAIN_URL } from '../../utils/url-utils';
import { DEFAULT_USER_ID } from '../../utils/constants';
import { setUserProfile } from '../../redux/actions/actionCreators';

import Profile from './Profile';

class ProfileContainer extends Component {
  componentDidMount() {
    let { userId } = this.props.match.params;
    if (!userId) {
      userId = DEFAULT_USER_ID;
    }

    axios.get(`${MAIN_URL}profile/${userId}`)
      .then((response) => {
        this.props.setUserProfile(response.data);
        console.log(response.data);
      });
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent);
