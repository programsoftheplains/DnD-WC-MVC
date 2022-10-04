const mongoose = require('mongoose')

const CharacterSchema = new mongoose.Schema({
  characterName: {
    type: String,
    required: true,
  },
  strScore: {
    type: Number,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
})

module.exports = mongoose.model('Character', CharacterSchema)
