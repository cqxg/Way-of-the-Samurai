import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

import './App.css';

const App = () => (
    <BrowserRouter>
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-wrapper-content">
                <Route path="/dialogs" component={Dialogs} />
                <Route path="/profile" component={Profile} />
                <Route path="/news" component={News} />
                <Route path="/music" component={Music} />
                <Route path="/Settings" component={Settings} />
            </div>
        </div>
    </BrowserRouter>
);

export default App;
