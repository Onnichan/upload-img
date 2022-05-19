const UserRepository = require('../repositories/user.repository')
const errorHelper = require('../helpers/error.helper')
const path = require('path')

class UserService {
  async get(id) {
    if (!id) errorHelper('id must be sent', 400)

    const currentEntity = await UserRepository.get(id)
    if (!currentEntity) errorHelper('entity was not found', 404)

    return currentEntity
  }

  //I should will add getAll method

  create = async (entity, files) => {
    entity = this.getRequestUser(entity, files)
    return await UserRepository.create(entity)
  }

  async update(id, entity) {
    if (!id) errorHelper('id must be sent', 400)

    return await UserRepository.update(id, entity)
  }

  async delete(id) {
    if (!id) errorHelper('id must be sent', 400)

    return await UserRepository.delete(id)
  }

  async getUserByUsername(username) {
    return await UserRepository.getUserByUsername(username)
  }

  getRequestUser(body = {}, files) {
    let profile
    let uploadPath
    console.log('files', files)
    if (!files || Object.keys(files).length === 0) {
      errorHelper('No files were uploaded.', 400)
    }
    profile = files.profile
    console.log(__dirname)
    uploadPath = path.join(
      __dirname,
      '/../assets/user/profile/' + profile.name.replace(' ', '_')
    )

    // Use the mv() method to place the file somewhere on your server
    profile.mv(uploadPath, function (err) {
      if (err) errorHelper(err, 500)
    })

    return {
      name: `${body.firstName} ${body.lastName}`,
      username: body.username,
      email: body.email,
      password: body.password,
      profile: uploadPath,
    }
  }
}

module.exports = new UserService()
