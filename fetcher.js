const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];


  request(url, (error, response, body) => {
    if (error) {
      console.log(`Error fetching ${url}`);
    } else if (response.statusCode !== 200) {
      console.log(`Invalid response status code ${response.statusCode} for ${url}`);
    } else {
      fs.writeFile(filePath, body, (err) => {
        if (err) {
          console.log(`Error saving to ${filePath}: ${err}`);
        } else {
          console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
        }
      });
    }
  });
