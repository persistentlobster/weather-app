import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Searchbar from './components/Searchbar/Searchbar';
import WeatherPane from './components/WeatherPane/WeatherPane';
import DailyForecast from './components/DailyForecast/DailyForecast';
import About from './components/About/About';
import './App.css';

const key = 'ac5d624a201bb2a2c6c0af0421abfe0e';
const weatherURL = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${key}/`;
const mapQuestKey = 'AOpagPUEPGJ7MLysAbqVElfofmi9ViWH';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            weatherData: {},
            location: '',
            route: 'about'
        }
    }

    // Routing handler
    onRouteChange = (route) => {
        this.setState({ route: route });
    };

    // Form change handler
    handleChange = (event) => {
        this.setState({ input: event.target.value })
    };

    // Request to Dark Sky and MapQuest APIs for weather and location data
    onSubmit = () => {
        let latLong;
        let accuracy;

        const request = async () => {
            const jsonMap = await fetch(`https://www.mapquestapi.com/geocoding/v1/address?key=${mapQuestKey}&location=${this.state.input}`)
                .then(response => response.json())
                .catch(err => console.log(err));

            if (jsonMap.info.statuscode !== 400) {
                latLong = jsonMap.results[0].locations[0].latLng;
                accuracy = jsonMap.results[0].locations[0].geocodeQualityCode.charAt(3);
            }

            if (accuracy === 'A' || accuracy === 'B') {
                let street, city, state;
                let address = "";
                const jsonWeather = await fetch(weatherURL + latLong.lat + ',' + latLong.lng)
                    .then(response => response.json())
                    .catch(error => console.error(error));
                this.setState({ weatherData: jsonWeather });
                
                street = jsonMap.results[0].locations[0].street;
                city = jsonMap.results[0].locations[0].adminArea5;
                state = jsonMap.results[0].locations[0].adminArea3;
           
                if (street !== "") {
                    address = street + ', ';
                }
                address += city + ', ' + state;
                this.setState({ location: address });
            } else {
                this.setState({ weatherData: ''});
                this.setState({ weatherData: { badLoc: true } });
            }
        };
        request();
    };

    render() {
        const { route } = this.state;
        return (
            <div className="App background-gradient">
                <Navbar onRouteChange={this.onRouteChange} />
                {   route === 'home'
                    ?
                        <div>
                            <Searchbar onChange={this.handleChange} onSubmit={this.onSubmit}/>
                            <WeatherPane weatherData={this.state.weatherData} location={this.state.location}/>
                            <DailyForecast weatherData={this.state.weatherData}/>
                        </div>
                    :
                        <div>
                            <About />
                        </div>
                }
            </div>
        );
    }
}

export default App;
