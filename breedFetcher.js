const name = process.argv.slice(2);

const request = require('request');
request(`https://api.thecatap.com/v1/breeds/search?q=${name}`, function(error, response, body) {
  if (!body[name]) {
    console.error('error:', "Not Found!");
  }
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);
  console.log(typeof body);

  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);
});