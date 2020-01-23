import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { PROFILE_URL } from '../../utils/url-utils';

import Profile from './Profile';

class ProfileContainer extends Component {

    componentDidMount() {
        axios.get(PROFILE_URL)
            .then(response => {
                // this.props.setUserProfile(response.data);
                console.log(response.data)
            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        );
    };
};

const mapStateToProps = () => ({
    profile: state.profilePage.profile
});

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);