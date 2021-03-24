var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

var messages = [
  {name: 'Tim', message: 'Hi from Tim'},
  {name: 'Alex', message: 'Hi from Alex'},
  {name: 'Misa', message: 'Hi from Misa'},
];

app.get('/messages', (req, res) => {
  res.send(messages);
});

app.post('/messages', (req, res) => {
  console.log(req.body);
  messages.push(req.body);
  res.sendStatus(200);
});

var server = app.listen(3000, () => {
  console.log('server is listening on port', server.address().port);
});