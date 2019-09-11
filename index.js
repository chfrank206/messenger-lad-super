const express = require('express');

//app setup

const app = express();

const server = app.listen(3000, () => {
    console.log('Listening to port 3000!');
});

//Static files
app.use(express.static('public'));

