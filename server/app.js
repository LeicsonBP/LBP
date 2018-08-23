const express = require('express');
const app = express();

app.use(express.static('../client/src'));

app.listen('3000');

console.log("Working at localhost:3000");

