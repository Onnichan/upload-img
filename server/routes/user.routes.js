const {Router} = require('express');
const UserController = require('../controllers/user.controller');

module.exports = function(){

  const router = Router();

  router.get('/:userId', UserController.get);
  router.patch('/:userId', UserController.update);
  router.delete('/:userId', UserController.delete);

  return router;
}