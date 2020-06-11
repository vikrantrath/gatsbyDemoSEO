
const axios = require('axios');
const url = 'http://localhost:5001';
const headers = {
  'Content-Type': 'application/json'
}

export function post(data, callback) {
  axios.post(url + '/api/sendEmail', data, {
    headers: headers
  })
    .then(function (response) {
      console.log(response);
      callback();
    }).catch(function (response) {
      //handle error
      console.log(response);
    });
}