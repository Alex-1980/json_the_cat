const request = require('request');

const fetchBreedDescription = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, function(error, response, body) {
    if (error) {
      callback(error, null);
      return null;
    }
    if (response.statusCode !== 200) {
      callback(`Status Code ${response.statusCode}`, null);
      return;
    }
    
    const data = JSON.parse(body);

    if (data.length === 0) {
      callback(error, 'breed not found');
      return;
    }
    callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };