import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Searchbar from './components/Searchbar/Searchbar';
import WeatherPane from './components/WeatherPane/WeatherPane';
import './App.css';

const key = 'ac5d624a201bb2a2c6c0af0421abfe0e';
const weatherURL = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${key}/`;
const mapQuestKey = 'AOpagPUEPGJ7MLysAbqVElfofmi9ViWH';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            weatherData: {}
        }
    }

    handleChange = (event) => {
        this.setState({ input: event.target.value })
    }

    onSubmit = () => {
        let latLong;
        let accuracy;

        const request = async () => {
            const jsonMap = await fetch(`http://www.mapquestapi.com/geocoding/v1/address?key=${mapQuestKey}&location=${this.state.input}`)
                .then(response => response.json())
                .catch(err => console.log(err));
            
            latLong = jsonMap.results[0].locations[0].latLng;
            accuracy = jsonMap.results[0].locations[0].geocodeQualityCode.charAt(3);
            console.log(accuracy);

            if (accuracy === 'A' || accuracy === 'B') {
                const jsonWeather = await fetch(weatherURL + latLong.lat + ',' + latLong.lng)
                    .then(response => response.json())
                    .catch(error => console.error(error));
                this.setState({ weatherData: jsonWeather });
            } else {
                this.setState({ weatherData: {} });
            }
            console.log(this.state.weatherData);
        }
        request();
    }

    render() {
        return (
            <div className="App">
                <Navbar />
                <Searchbar onChange={this.handleChange} onSubmit={this.onSubmit} />
                <WeatherPane weatherData={this.state.weatherData} />
            </div>
        );
    }
}

export default App;
