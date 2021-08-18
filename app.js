let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let ledger = require('./app/controller/routes/ledger');
let db = require('./app/utils/database');
db.dbConnection();
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
  });
app.use('/', ledger);
app.listen(process.env.PORT, '0.0.0.0', function () {
    console.log('server listening on port 3030');
});