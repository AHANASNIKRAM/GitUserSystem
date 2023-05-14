const express = require('express'),
       path = require('path');

const app = express();
app.listen(process.env.PORT || 8080, () =>
{
});
app.use(express.static(__dirname + '/www'));
app.get('/*',(req,res) => {
res.sendFile(path.join(__dirname + '/www/index.html'))});
