import React, { Component } from 'react';

// class WeatherPane extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <div>
//                 { this.props.weatherData.currently.tempurature }
//             </div>
//         );
//     }
// }

// export default WeatherPane;

const WeatherPane = ( {weatherData} ) => {
    return (
        <div>
            {weatherData.currently.tempurature}
        </div>
    );
}

export default WeatherPane;