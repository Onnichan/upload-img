const AuthService = require('../services/auth.service');

class AuthController{

  async signUp(req, res){
    const {body} = req;
    const createdUser = await AuthService.signUp(body);
    return res.status(201).send(createdUser);
  }

  async signIn(req, res){
    const {body} = req;
    console.log('body', body);
    const creds = await AuthService.signIn(body);
    return res.send(creds);
  }
}

module.exports = new AuthController;