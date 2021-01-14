const request = require('request');
const query = process.argv[2];

let url = `https://api.thecatapi.com/v1/breeds/search?q=${query}`;

request(url, (err, response, body) => {
  const data = JSON.parse(body);
  if (err) {
    console.log(`Error with request` + err);
    return;
  } else if (data.length === 0) {
    console.log(`Breed Not Found`);
    return;
  }
  printDesc(data);

});

const printDesc = function(data) {
  const desc = data[0].description;
  console.log(desc);
};