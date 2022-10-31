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
  itemWeight: {
    type: Number,
    required: false,
  },
  itemDescription: {
    type: String,
    required: false
  },
  charId: {
    type: String,
    required: true
  },
  public: {
    type: Boolean,
    required: false
  }
})

module.exports = mongoose.model('Inventory', InventorySchema)
