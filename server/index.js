const express = require('express');
const {PORT,MONGO_URI} = require('./config');
const mongoose = require('mongoose');
const router = require('./routes');

const app = express();

mongoose.connect(MONGO_URI)
.then(()=> {

  app.use(router).listen(() => {
    console.log(`Application listening on port : ${PORT}`)
  });
})
