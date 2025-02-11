const express = require('express');
const app = express();
app.get('/', (req, res) => {
  getData((error, data) => {
    if (error) {
      console.error('Error fetching data:', error);
      res.status(500).send('Error fetching data');
    } else {
      res.send(data);
    }
  });
});

function getData(callback) {
  setTimeout(() => {
    const random = Math.random();
    if (random < 0.5) {
      callback(null, { message: 'Data fetched successfully' });
    } else {
      callback(new Error('Failed to fetch data'));
    }
  }, 1000);
}