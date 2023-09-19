
'use strict';

const api_key = "ca76a8992a20704a4cbffc6bdd1a6f54";

// export const fetchData = function(URL, callback) {
//     fetch(`${URL}&appid=${api_key}`)
//         .then(res => res.json())
//         .then(data => callback(data));
// }
//     .catch(error => {
//         console.error(error);
//         alert('Failed to retrieve data. Please try again later.');
//   });


export const fetchData = function(url, callback) {
    fetch(`${url}&appid=${api_key}`)
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => {
            console.error(error);
            alert('Failed to retrieve data. Please try again later.');
        });
}


  
// export const fetchData = async function(URL, callback) {
//     const response = await fetch(`${URL}&appid=${api_key}`, {mode: 'no-cors' });
//     const data = await response.json();
//     callback(data);
// }

export const url = {
    currentWeather(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`
    },
    forecast(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`
    },
    airPollution(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`
    },
    reverseGeo(lat, lon) {
        return `https://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`
    },
    geo(query) {
        return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
    }
}