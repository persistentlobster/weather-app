import React, { Component } from 'react';
import Skycons from 'react-skycons'
import "./WeatherPane.css"

class WeatherPane extends Component {

    // iconSize = {
    //     height: '100%',
    //     width: '100%'
    // };

    isEmpty = (obj) => {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };

    handleValidWeather = (weatherData) => {
        return (
            <div className="center flex flex-column flex-row-l justify-between ph3 ph4-l pv5 w-70">
                <div className="w-100 w-33-l ph4-l mb5 mb0-l ba">
                    <div className="img">
                        <Skycons className="icon-size"
                            color='black'
                            icon={weatherData.currently.icon.toUpperCase().replace(/-/g, '_')}
                            autoplay={true}
                            // style={this.iconSize}
                        />
                    </div>
                </div>
                <div className="w-100 w-33-l ph4-l mb5 mb0-l ba">
                    <h1 className="foo">{weatherData.currently.temperature.toPrecision(2)}°</h1>
                    <p>Feels like: {weatherData.currently.apparentTemperature.toPrecision(2)}°</p>
                    <p>
                        Hi: {weatherData.daily.data[0].temperatureHigh.toPrecision(2)}°&nbsp;
                        Low: {weatherData.daily.data[0].temperatureLow.toPrecision(2)}°
                    </p>
                </div>
                <div className="w-100 w-33-l ph4-l mb5 mb0-l ba">
                    <p>Example Detail: Value</p>
                    <p>Example Detail: Value</p>
                    <p>Example Detail: Value</p>
                    <p>Example Detail: Value</p>
                </div>
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