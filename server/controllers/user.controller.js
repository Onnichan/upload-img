const UserService = require('../services/user.service');

class UserController{

  async get(req, res){
    const {userId} = req.params;
    const user = await UserService.get(userId);
    return res.send(user);
  }

  // async create(entity){
  //   return await UserModel.create(entity);
  // }

  async update(req, res){
    const {body} = req;
    const {userId} = req.params;
    const updateUser = await UserService.update(userId, body);
    return res.send(updateUser);
  }

  async delete(id){
    const {userId} = req.params;
    const deleteUser = await UserService.delete(userId);
    return res.send(deleteUser);
  }
}

module.exports = UserController;