const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require('path')

const routes = require('./api/routes/routes');

app.use(
    bodyParser.urlencoded({
      extended: true,
    })
);

app.use(
  bodyParser.json({
      limit: "500mb",
  })
);

//this is to prevent CORS errors/
app.use((req, res, next) => {
  //the starts says allow request from any _____
  res.header('Access-Control-Allow-Origin', '*'); //origin
  res.header('Access-Control-Allow-Headers', 'content-type');//header
  res.setHeader('Access-Control-Allow-Credentials', true);
  if(req.method === 'OPTIONS'){
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, PUT');//methods
    return res.status(200).json({});
  }
  next();
})

app.use('/', express.static('static/lab4_angular'));

app.use('/api', routes);

//put error handling at the bottom
//if we request a route that is not seen above the following will catch it and handle the error
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);//forward the request to the next method
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  })
});

module.exports = app;