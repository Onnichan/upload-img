const {model, Schema} = require('mongoose');

const ImageSchema = new Schema({
  name: {type: String, required: true},
  path: {type: String, required: true},
  alt: {type: String, required: true},
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  }
})

module.exports = model('image', ImageSchema);