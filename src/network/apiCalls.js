const axios = require('axios');
const url = 'localhost:3000'

export function post(data) {
  axios.post(url + '/api/sendEmail', data)
    .then(function (response) {
      console.log(response);
    })
}