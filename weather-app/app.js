const request = require('request');

const url = "https://api.darksky.net/forecast/9d1f0d6f8b20ffea576e3be33d48cf47/37.8267,-122.4233";

//request({ url, json: true }, (error, response) => {
//    console.log(response.body.currently.temperature);
//})

const geocode = (address, callback) => {
    const url = "https://api.darksky.net/forecast/9d1f0d6f8b20ffea576e3be33d48cf47/37.8267,-122.4233";
}