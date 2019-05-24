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

    renderWeatherPane = () => {
        let { weatherData } = this.props;
        if (weatherData.badLoc) {
            return (
                <p>Please enter a valid location.</p>
            )
        } else if (!this.isEmpty(weatherData)) {
            return (
                <div>
                    <h1>{weatherData.currently.temperature}°</h1>
                </div>
            );
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