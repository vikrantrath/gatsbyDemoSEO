
const axios = require('axios');
const url = 'https://www.sheeranalyticsandinsights.com';

export function post(data, callback) {
  axios.post(url + '/api/sendEmail', data)
    .then(function (response) {
      console.log(response);
      callback();
    }).catch(function (response) {
      //handle error
      console.log(response);
    });
}