const {model, Schema} = require('mongoose');

const UserSchema = new Schema({
  name: {type: String, required: true},
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  profile: {type: String},
  email: {type: String, required: true, unique: true}
})

UserSchema.methods.comparePassword = function(password){
  return this.password === password ? true : false;
}

module.exports = model('users', UserSchema);

