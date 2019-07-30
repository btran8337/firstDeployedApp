import React, { Component } from 'react';

// making it a class component bc expect to have to put
// helper function or 2 in here which will be
// responsibile for rendering whats in header component

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">
            EmailList
          </a>
          <ul className="right">
            <li>
              <a>Login With Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;