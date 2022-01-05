require("dotenv").config();
const express = require('express');
const fs = require('fs');
const app = express();

const port = process.env.PORT;

app.get('/', (req, res, next) => {
  fs.readFile('./index.html', function(err, data) {
    if(err) {
      console.log('error while reading file ', err);
    }else {
      res.status(200).write(data);
      res.end();
    }
  });
});

app.get('/about', (req, res) => {
  fs.readFile('./about.html', function(err, data) {
    if(err) {
      console.log('error while reading file ', err);
    }else {
      res.status(200).write(data);
      res.end();
    }
  });
});

app.get('/contact', (req, res) => {
  fs.readFile('./contact-me.html', function(err, data) {
    if(err) {
      console.log('error while reading file ', err);
    }else {
      res.status(200).write(data);
      res.end();
    }
  });
});

app.use(function (req,res,next){
  fs.readFile('./404.html', function(err, data) {
    if(err) {
      console.log('error while reading 404.html ', err);
    }else {
      res.status(404).write(data);
      res.end();
    }
  })
});

app.listen(port, () => {
  console.log(`Express App running on port ${port}`);
});