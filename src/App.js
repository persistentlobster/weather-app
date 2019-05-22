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
    handleChange = (event) => {
        this.setState({ input: event.target.value })
    };

    onSubmit = () => {
        //get api request from input here
        //1600+Pennsylvania+Ave+NW,Washington,DC,20500
        var latLng;   
        fetch(`http://www.mapquestapi.com/geocoding/v1/address?key=${mapQuestKey}&location=${this.state.input}`)
            .then(response => response.json())
            .then(data => latLng = data.results[0].locations[0].latLng)
            .then(() => console.log(latLng))
            .catch(err => console.log(err));

        console.log(latLng); 
    }

    render() {
        return (
            <div>
                <Navbar />
                { this.handleChange() }
                <Searchbar onChange={this.handleChange} />
            </div>
        );
    }
}

export default App;
