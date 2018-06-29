const express = require('express');
const bodyParser = require('body-parser');
const { port } = require('./config/keys');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

require('./routes/routes')(app);

app.listen(port, () => {
  console.log('Server listening on port %s ', port);
});
