const express = require('express');
const config = require('./config');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.get('/bart-stations', (req, res, next) => {

  fetch(`http://api.bart.gov/api/stn.aspx?cmd=stns&key=${config.bartApiKey}&json=y`)
    .then(res => res.json())
    .then(data => {
      res.send(data.root.stations.station);
    })
    .catch(error => console.error(error));
});

app.listen(config.PORT, () => {
  console.log('Server listening on port %s, Ctrl+C to stop', config.PORT);
});