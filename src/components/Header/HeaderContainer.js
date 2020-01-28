import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { setAuthUserData } from '../../redux/actions/actionCreators';

import Header from './Header';

class HeaderContainer extends Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    debugger
                    const { id, email, login } = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            });
    }

    render() {
        return <Header {...this.props} />
    };
};

const mapStateToProps = (state) => {
    {

    }
}

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
