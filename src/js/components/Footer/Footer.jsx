import React, { Component } from 'react';

export default class Footer extends Component {
    render(){
        return (
            <footer className="footer is-dark">
            <div className="container">
              <div className="content has-text-centered">
                <p>
                  <strong>Budgtr</strong>, Redux project made with by <a href="https://larrycustod.io" target="_blank">Larry</a>
                </p>
              </div>
            </div>
          </footer>
        )
    }
}