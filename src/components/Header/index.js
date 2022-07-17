import React from 'react';
import Nav from '../Nav';

function Header() {
    return (
        <header className="flex-row px-1">
          <h2>
            <a data-testid="link" href="/">
              <span>Chris Burton</span>
            </a>
          </h2>
          <Nav></Nav>
        </header>
    );
}

export default Header;