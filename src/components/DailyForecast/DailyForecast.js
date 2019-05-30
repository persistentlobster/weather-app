import React, { Component } from 'react';
import './DailyForecast.css';
import Skycons from 'react-skycons'
import moment from 'moment';

class DailyForecast extends Component {

    // Check for empty object
    isEmpty = (obj) => {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };

    toPercent = (decVal) => {
        return (decVal * 100).toFixed(0);
    };

    // Create daily forecast cards and return to renderDailyForecast for display
    handleDailyForecast = (weatherData) => {
        let days = 7, forecast = [], forecastContainer = [], timezoneOffset = 7 * 60 * 60, forecastDay = '', forecastDate = '';
        for (let i = 0; i < days; i++) {
            // get the days for each forecast from the epoch time and shorten day to 3 letters
            // add 7 hours to time received by dark sky due to offset of timezone
            forecastDay = moment.unix(weatherData.daily.data[i].time + timezoneOffset).format('ddd');
            forecastDate = moment.unix(weatherData.daily.data[i].time + timezoneOffset).format('MM/DD');
            // Create card for one single day
            forecast.push(
                <article className="mw4 center bg-white br2 mv2 b--black-10 pl3 pr3 pt2 ba card">
                <div className="tc">
                    <Skycons className="icon-size"
                             color='black'
                             icon={weatherData.daily.data[i].icon.toUpperCase().replace(/-/g, '_')}
                             autoplay={true}
                    />
                    <h1 className="f3">{forecastDay}</h1>
                    <h1 className="f4 mb3 date-color">{forecastDate}</h1>
                    <h2 className="f5 fw4 gray mt0">Hi: {weatherData.daily.data[i].temperatureHigh.toPrecision(2)}°</h2>
                    <h2 className="f5 fw4 gray mt0">Low: {weatherData.daily.data[i].temperatureLow.toPrecision(2)}°</h2>
                    <h2 className="f5 fw4 gray mt0">Precip: {this.toPercent(weatherData.daily.data[i].precipProbability)}%</h2>
                </div>
            </article>);
        }
        // Container for all cards
        forecastContainer.push(<div><h1>7 Day Forecast</h1>
            <div className="w-80-ns flex flex-wrap center">{forecast}</div>
        </div>);
        return forecastContainer;

    };

    renderDailyForecast = () => {
        let { weatherData } = this.props;
        if (this.isEmpty(weatherData) || weatherData.badLoc) {
            return (null)
        } else {
            return this.handleDailyForecast(weatherData);
        }
    };

    render() {
        return (
            <div>
                {this.renderDailyForecast()}
            </div>
        );
    }
}


export default DailyForecast;