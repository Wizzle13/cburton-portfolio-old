import React from 'react';

function Nav() {
    return (
        <nav>
            <ul className="flex-row">
            <li className="mx-2">
                <a data-testid="about" href="#about">
                About Me
                </a>
            </li>
            <li>
                <span>Projects</span>
            </li>
            <li className = "mx-2">
                <span>Contact</span>
            </li>
            <li>
                <span>Resume</span>
            </li>
            </ul>  
        </nav>
    )
}

export default Nav;