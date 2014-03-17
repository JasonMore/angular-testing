var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/public'));

app.get('/api/contacts', function(req, res){
  res.send([
    {name: 'Jason', age: 29 },
    {name: 'Jessie', age: 28},
    {name: 'Colin', age: 1},
    {name: 'Bo', age: 6},
    {name: 'Grandma', age: 80}
  ]);
});

app.listen(3333);