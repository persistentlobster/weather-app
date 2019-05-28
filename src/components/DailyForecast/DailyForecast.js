import React, { Component } from 'react';
import Skycons from 'react-skycons'
import moment from 'moment';

class DailyForecast extends Component {

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
        let days = 7, forecast = [], forecastContainer = [];
        for (let i = 0; i < days; i++) {
            // get the days for each forecast from the epoch time and shorten day to 3 letters
            let forecastDay = moment.unix(weatherData.daily.data[i].time).format('dddd');
            forecastDay = forecastDay.slice(0, 3);
            // create card for one single day
            forecast.push(<article className="mw4 center bg-white br2 mv2 b--black-10 pl3 pr3 pt2">
                <div className="tc">
                    <Skycons className="icon-size"
                             color='black'
                             icon={weatherData.daily.data[i].icon.toUpperCase().replace(/-/g, '_')}
                             autoplay={true}
                    />
                        <h1 className="f3 mb2">{forecastDay}</h1>
                        <h2 className="f5 fw4 gray mt0">Hi: {weatherData.daily.data[i].temperatureHigh.toPrecision(2)}°</h2>
                        <h2 className="f5 fw4 gray mt0">Low: {weatherData.daily.data[i].temperatureLow.toPrecision(2)}°</h2>
                        <h2 className="f5 fw4 gray mt0">Precip: {this.toPercent(weatherData.daily.data[i].precipProbability)}%</h2>

                </div>
            </article>);
        }
        // container for all cards
        forecastContainer.push(<div className="w-80-ns flex flex-wrap center">{forecast}</div>);
        return forecastContainer;

    };

    renderDailyForecast = () => {
        let { weatherData } = this.props;
        if (!this.isEmpty(weatherData)) {
            return this.handleDailyForecast(weatherData);
        } else {
            return (null)
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