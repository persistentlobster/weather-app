import React, { Component } from 'react';

class WeatherPane extends Component {

    //Helper function
    isEmpty = (obj) => {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };

    handleValidWeather = (weatherData) => {
        return (
            <div>
                <h1>{weatherData.currently.temperature}°</h1>
            </div>
        );

    };

    renderWeatherPane = () => {
        let { weatherData } = this.props;
        if (weatherData.badLoc) {
            return (
                <p>Please enter a valid location.</p>
            )
        } else if (!this.isEmpty(weatherData)) {
            return this.handleValidWeather(weatherData);
        } else {
            return (null)
        }
    };

    render() {
        return (
            <div>
                {this.renderWeatherPane()}
            </div>
        )
    }
}

export default WeatherPane;