const mongoose = require('mongoose')

const InventorySchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  itemNumber: {
    type: Number,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Inventory', InventorySchema)
