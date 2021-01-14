const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (err, response, body) => {
    const data = JSON.parse(body);
    if (err) {
      callback(err, null);
      return;
    } else if (data.length === 0) {
      callback('Breed not Found');
      return;
    }
    callback(null, data[0].description);
  
  });
};

module.exports = {fetchBreedDescription};