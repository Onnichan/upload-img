const UserModel = require('../models/user.model');

class UserRepository{

  async get(id){
    return await UserModel.findById(id);
  }

  async create(entity){
    return await UserModel.create(entity);
  }

  async update(id, entity){
    return await UserModel.findByIdAndUpdate(id, entity, {new: true})
  }

  async delete(id){
    return await UserModel.findByIdAndDelete(id);
  }

  async getUserByUsername(username){
    return await UserModel.findOne({username});
  }
}

module.exports = new UserRepository;