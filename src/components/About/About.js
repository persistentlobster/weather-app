import React from 'react';
import Skycons from 'react-skycons'
import './About.css'
import logo from './logo.svg';
import momentjs from './momentjs.svg'
import tachyons from './tachyons.png';
import darksky from './darksky.svg';
import mapquest from './mapquest.svg';

const iconSize = {
    height: '50%',
    width: '50%'
};

const About = () => {
    return(
        <div className="w-50-ns center mt4-ns">
            <h1 className="f2-ns tracked">ABOUT</h1>
            <p>A web application for viewing the weather in any U.S. city or address.</p>
            <p>This web page was created by Micah Burnett and Michael Kelley for CS465P - Full Stack Web Development.</p>
            <p>Check us out on GitHub!</p>
            <a className="link near-black hover-silver dib mh3 tc" href="https://github.com/mkelley010/" title="GitHub">
                <svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                     fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414">
                    <path
                        d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"/>
                </svg>
                <span className="f6 db">Michael Kelley</span>
            </a>
            <a className="link near-black hover-silver dib mh3 tc" href="https://github.com/persistentlobster" title="GitHub">
                <svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                     fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414">
                    <path
                        d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"/>
                </svg>
                <span className="f6 db">Micah Burnett</span>
            </a>
            <h1 className="f2-ns tracked mt4">POWERED BY</h1>
            <img src={logo} className="react-logo" alt="react logo"/><br/>
            <a href="https://reactjs.org/" className="f3-ns tracked mb2 no-underline">React.js</a>
            <p className="mb4">A JavaScript library for building user interfaces.</p>
            <img src={tachyons} className="tachyons-logo" alt="tachyons logo" /><br/>
            <a href="https://tachyons.io/" className="f3-ns tracked mb2 no-underline">Tachyons</a>
            <p className="mb4">A CSS framework.</p>
            <img src={darksky} className="darksky-logo mb4" alt="dark sky logo"/><br/>
            <a href="https://darksky.net/dev" className="f3-ns tracked mb2 no-underline">Dark Sky</a>
            <p className="mb4">A web API for weather forecasts.</p>
            <img src={mapquest} className="mapquest-logo mb4" alt="mapquest logo"/><br/>
            <a href="https://developer.mapquest.com/" className="f3-ns tracked mb2 no-underline">MapQuest</a>
            <p className="mb4">A web API for geocoding locations.</p>
            <img src={momentjs} className="moment-logo mb4" alt="moment.js logo"/><br/>
            <a href="https://momentjs.com/" className="f3-ns tracked mb2 no-underline">Moment.js</a>
            <p className="mb5">A JavaScript library for parsing, validating, manipulating, and formatting dates.</p>
            <Skycons className="icon-size mt2"
                     color='black'
                     icon={'RAIN'}
                     autoplay={true}
                     style={iconSize}
            /><br/>
            <a href="https://github.com/roadmanfong/react-skycons" className="f3-ns tracked mb2 no-underline">Skycons</a>
            <p className="mb5">A set of animated weather icons ported to React components.</p>
        </div>
    );
};

export default About;