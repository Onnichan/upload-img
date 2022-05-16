const errorHelper = require('../helpers/error.helper');
const UserService = require('../services/user.service');

class AuthService{

  async signUp(user){
    const {username} = user;
    const userExist = await UserService.getUserByUsername(username);
    if(userExist) errorHelper('User already exist', 401);

    return await UserService.create(user);
  }

  async signIn(user){
    const {username, password} = user;
    const userExist = await UserService.getUserByUsername(username);
    if(!userExist) errorHelper('User does not exist', 404);

    const validPassword = userExist.comparePassword(password);
    if(!validPassword) errorHelper('Invalid password', 400);

    return userExist;
  }
}

module.exports = new AuthService;