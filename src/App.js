import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Searchbar from './components/Searchbar/Searchbar';
import './App.css';

const mapQuestKey = 'AOpagPUEPGJ7MLysAbqVElfofmi9ViWH';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }
    handleChange = () => {
        fetch(`http://www.mapquestapi.com/geocoding/v1/address?key=${mapQuestKey}&location=1600+Pennsylvania+Ave+NW,Washington,DC,20500`)
            .then(response => response.json())
            .then(data => console.log(data.results[0].locations[0].latLng))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <Navbar />
                <Searchbar onChange={this.handleChange} />
            </div>
        );
    }
}

export default App;
