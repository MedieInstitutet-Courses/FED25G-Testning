const express = require('express');

const app = express();

app.use(express.static(__dirname + '/'));

app.listen(5005, () => console.log('Server är startad på port 5005'));
