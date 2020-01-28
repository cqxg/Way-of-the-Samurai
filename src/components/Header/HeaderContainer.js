import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Header from './Header';

class HeaderContainer extends Component() {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                debugger
            });
    }

    render() {
        return <Header {...this.props} />
    };
};

const mapStateToProps = () => {{
    
}}

export default connect () (HeaderContainer);
