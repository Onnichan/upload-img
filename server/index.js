const express = require('express');
const {PORT,MONGO_URI} = require('./config');
const mongoose = require('mongoose');
const app = express();

mongoose
.connect(MONGO_URI) 
.then(()=> {
    const router = require('./routes');
    app.use(router());
    app.listen(PORT,() => {
      console.log(`Application listening on port : ${PORT}`);
    })
  })
  .catch(console.log);
