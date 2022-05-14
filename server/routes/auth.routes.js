const {Router} = require('express');
const AuthController = require('../controllers/auth.controller');

module.exports = function(){
  const router = Router();

  router.post('/signup', AuthController.signUp);
  router.post('/signin', AuthController.signIn);
  return router;
} 