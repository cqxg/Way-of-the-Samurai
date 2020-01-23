import React, { Component } from 'react';
import { connect } from 'react-redux';

import axios from 'axios';

// import { PROFILE_URL } from '../../utils/url-utils';
import { setUserProfile } from '../../redux/actions/actionCreators'

import Profile from './Profile';

class ProfileContainer extends Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
            .then(response => {
                this.props.setUserProfile(response.data);
                console.log(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        );
    };
};

const mapStateToProps = (state) => ({
    profile: state.profile
});

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);