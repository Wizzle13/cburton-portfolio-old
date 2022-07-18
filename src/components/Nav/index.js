import React from 'react';

function Nav(props) {
    const {
        // contactSelected,
        setContactSelected
      } = props;
    return (
        <nav>
            <ul className="flex-row">
            <li className="mx-2">
                <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
                About Me
                </a>
            </li>
            <li className = "mx-2" >
                <span onClick={() => setContactSelected(false)}>Portfolio</span>
            </li>
            <li className = "mx-2" >
                <span onClick={() => setContactSelected(true)}>Contact</span>
            </li>
            <li className = "mx-2" >
                <span onClick={() => setContactSelected(false)}>Resume</span>
            </li>
            </ul>  
        </nav>
    )
}

export default Nav;