const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

require('./src/database');

const PORT = 8080;

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use('/', router);

// router.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/', 'build', 'index.html'));
// });

app.get('/', (req, res) => {
  console.log('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
