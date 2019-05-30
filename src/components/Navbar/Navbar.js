import React from 'react';

const bgColor = {
    background: '#027CB7'
};

const Navbar = ({ onRouteChange }) => {
    return (
        <nav className="nav db dt-l w-100 border-box pa3 ph5-l flex fixed top-0 z-1" style={bgColor}>
            <a className="db dtc-l v-mid white link dim w-100 w-25-l tc tl-l mb2 mb0-l tracked" href="# " title="Home">Weather App</a>
            <div className="db dtc-l v-mid w-100 w-75-l tc tr-l tracked">
                <a onClick={ () => onRouteChange('home')} className="link dim white f6 f5-l dib mr3 mr4-l" href="# " title="Home">Home</a>
                <a onClick={ () => onRouteChange('about')} className="link dim white f6 f5-l dib mr3 mr4-l" href="# " title="About">About</a>
            </div>
        </nav>
    );
};

export default Navbar;