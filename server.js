
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())

require('./app/routes/distributors.routes.js')(app);

app.use(require('./app/routes/distributors.routes'))
// Create a Server
var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("App listening at http://%s:%s", host, port)

})
