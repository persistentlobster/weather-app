import React from 'react';
import logo from './sun.png'

const bgStyle = {
    background: '#027CB7',
    maxHeight: '50px'
};

const iconSize = {
    height: '45px',
    width: '45px'
};

const Navbar = ({ onRouteChange }) => {
    return (
        <nav className="dt w-100 border-box ph5-ns fixed z-1" style={bgStyle}>
            <a onClick={ () => onRouteChange('home')} className="dtc v-mid mid-gray link dim w-50 pl2" href="# " title="Home">
                <img src={logo} className="dib w2 br-100 fl pt2" style={iconSize} alt="Site Logo"></img>
                <p className="logoFont link dim white f4 f4-ns dib fl pl3">CIRRUS</p>
            </a>
            <div className="dtc v-mid w-50 tr">
                <a onClick={ () => onRouteChange('home')} className="link dim white f6 f5-ns dib mr3 mr4-ns" href="# " title="Home">Home</a>
                <a onClick={ () => onRouteChange('about')} className="link dim white f6 f5-ns dib mr3 mr4-ns" href="# " title="About">About</a>
            </div>
        </nav>
    );
};

export default Navbar;