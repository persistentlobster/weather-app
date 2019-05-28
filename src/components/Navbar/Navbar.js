import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-dark-blue db dt-l w-100 border-box pa3 ph5-l flex">
            <a className="db dtc-l v-mid white link dim w-100 w-25-l tc tl-l mb2 mb0-l tracked" href="# " title="Home">Weather App</a>
            <div className="db dtc-l v-mid w-100 w-75-l tc tr-l tracked">
                <a className="link dim white f6 f5-l dib mr3 mr4-l" href="# " title="Home">Home</a>
                <a className="link dim white f6 f5-l dib mr3 mr4-l" href="# " title="Home">About</a>
            </div>
        </nav>
    );
};

export default Navbar;