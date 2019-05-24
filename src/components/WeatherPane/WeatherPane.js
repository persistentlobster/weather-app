import React, { Component } from 'react';

const WeatherPane = ( {weatherData} ) => {
    console.log({weatherData});
    if (!isEmpty(weatherData)) {
        return (
            <div>
                <h1>{weatherData.currently.temperature}°</h1>
            </div>
        );
    } else if (weatherData.badLoc) {
        return (
            <p>Please enter a valid location.</p>
        )
    } else {
        return (null)
    }
}

//Helper function
function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

export default WeatherPane;