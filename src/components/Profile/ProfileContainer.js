import React, { Component } from 'react';
import { connect } from 'react-redux';

import axios from 'axios';

import { PROFILE_URL } from '../../utils/url-utils';
import { setUserProfile } from '../../redux/actions/actionCreators';

import Profile from './Profile';

class ProfileContainer extends Component {
  componentDidMount() {
    axios.get(PROFILE_URL)
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

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
