import React, { Component } from 'react';

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar is-info" role="navigation" aria-label="main navigation">
                <div className='container'>
                    <div className="navbar-brand is-inline-flex">
                        <a className="navbar-item navbar-site-title" href="/">Budgetr</a>
                    </div>
                    <div className="navbar-end is-inline-flex navbar-is-aligned-middle">
                        <div className="navbar-item">
                                <a className="button is-dark"
                                    target="_blank"
                                    href="https://github.com/larrycustodio/redux-budget-tracker">
                                    <span className="icon"><i className="fa fa-github"></i></span>
                                    <span>Github</span>
                                </a>
                        </div>
                    </div>
                </div>
            </nav >
        );
    }
}