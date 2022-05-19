const AuthService = require('../services/auth.service');


class AuthController{
  
  signUp = async (req, res) => {
 
    let {body, files} = req;
    const createdUser = await AuthService.signUp(body, files);
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