import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';

const mapQuestKey = 'AOpagPUEPGJ7MLysAbqVElfofmi9ViWH';

class App extends Component {
    addressToCoordinates = () => {
        fetch(`http://www.mapquestapi.com/geocoding/v1/address?key=${mapQuestKey}&location=1600+Pennsylvania+Ave+NW,Washington,DC,20500`)
            .then(response => response.json())
            .then(data => console.log(data.results[0].locations[0].latLng))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                {this.addressToCoordinates()};
                <Navbar />
            </div>
        );
    }
}

export default App;
