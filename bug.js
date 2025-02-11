const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronously fetching data
  getData((data) => {
    if (data) {
      res.send(data);
    } else {
      res.status(500).send('Error fetching data');
    }
  });
});

function getData(callback) {
  // Simulate asynchronous operation that might fail
  setTimeout(() => {
    const random = Math.random();
    if (random < 0.5) {
      callback({ message: 'Data fetched successfully' });
    } else {
      callback(null); // Simulate an error
    }
  }, 1000);
}