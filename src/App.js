import React, { Suspense, Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Loader from './utils/loader';
import { ROUTES } from './utils/url-utils';
import { initializeApp } from './redux/actions/thunks';

import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import UsersContainer from './components/Users/UsersContainer';
import Settings from './components/Settings/Settings';
import Login from './components/Login/Login';

import './App.css';

class App extends Component {
    componentDidMount() {
        const { props } = this;
        props.initializeApp();
    };

    render() {

        if (!this.props.initialized) {
            return <Loader />
        };

        return (
            <Suspense fallback="loading">
                <BrowserRouter>
                    <div className="app-wrapper">
                        <HeaderContainer />
                        <Navbar />
                        <div className="app-wrapper-content">
                            <Route path={ROUTES.PROFILE_USER_ID} render={() => <ProfileContainer />} />
                            <Route path={ROUTES.DIALOGS} render={() => <DialogsContainer />} />
                            <Route path={ROUTES.NEWS} render={() => <News />} />
                            <Route path={ROUTES.MUSIC} render={() => <Music />} />
                            <Route path={ROUTES.USERS} render={() => <UsersContainer />} />
                            <Route path={ROUTES.SETTINGS} render={() => <Settings />} />
                            <Route path={ROUTES.LOGIN} render={() => <Login />} />
                        </div>
                    </div>
                </BrowserRouter>
            </Suspense>
        )
    }
};

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default connect(mapStateToProps, { initializeApp })(App);