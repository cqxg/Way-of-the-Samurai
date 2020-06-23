import React, { Suspense, Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Loader from './utils/loader';
import { ROUTES } from './utils/url-utils';
import { initializeApp } from './redux/actions/thunks';

import './App.css';

const HeaderContainer = React.lazy(() => import('./components/Header/HeaderContainer'));
const Navbar = React.lazy(() => import('./components/Navbar/Navbar'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const News = React.lazy(() => import('./components/News/News'));
const Music = React.lazy(() => import('./components/Music/Music'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));
const Login = React.lazy(() => import('./components/Login/Login'));

class App extends Component {
  componentDidMount() {
    const { props } = this;
    props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Loader />;
    }

    return (
      <Suspense fallback="Loading...">
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
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default connect(mapStateToProps, { initializeApp })(App);
