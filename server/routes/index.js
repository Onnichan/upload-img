const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const UserRoutes = require('./user.routes');
const AuthRoutes = require('./auth.routes');
const notfoundMiddleware = require('../middlewares/notfound.middleware');
const errorMiddleware = require('../middlewares/error.middleware');
require('express-async-errors');

module.exports = function(){
  const router = express.Router();
  const apiRoutes = express.Router();

  apiRoutes 
    .use(express.json())
    .use(cors())
    .use(helmet())
    .use(compression())

  apiRoutes.use('/user', UserRoutes());
  apiRoutes.use('/auth', AuthRoutes());

  router.use('/api/v1', apiRoutes);
  router.use(notfoundMiddleware);
  router.use(errorMiddleware);

  return router;
}