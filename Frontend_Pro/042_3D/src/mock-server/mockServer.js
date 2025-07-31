const express = require('express');
const config = require('./mockConfig');

const app = express();
app.use(express.json());

const port = config.port || 3000;

config.routes.forEach(route => {
  app[route.method.toLowerCase()](route.path, (req, res) => {
    res.json(route.response);
  });
});

app.listen(port, () => {
  console.log(`Mock server running on http://localhost:${port}`);
});
