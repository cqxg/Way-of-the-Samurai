import React, { Component } from 'react';


import './App.css';


const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src=''></img>
            </header>
            <nav className='nav'>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className='content'>
                <img src='https://a.d-cd.net/870b45as-960.jpg'></img>
            </div>
            <div>
                ava+desc
            </div>
            <div>
                My Posts
            </div>
            <div>
                new post
            </div>
            <div>
                <div>
                    Post1
                </div>
                <div>
                    Poast2
                </div>
            </div>
        </div>
    );
}

export default App;
