import React, { Component } from 'react';
import Skycons from 'react-skycons'

class WeatherPane extends Component {

    iconSize = {
        height: '40%',
        width: '40%'
    };

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
            <div className="w-50 center ba flex">
                <Skycons className="icon-size"
                         color='black'
                         icon='PARTLY_CLOUDY_DAY'
                         autoplay={true}
                         style={this.iconSize}
                />
                <p className="f1-ns">{weatherData.currently.temperature.toPrecision(2)}°</p>
            </div>

        );

    };

    renderWeatherPane = () => {
        let { weatherData } = this.props;
        if (weatherData.badLoc) {
            return (
                <p className="red">Please enter a valid location.</p>
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