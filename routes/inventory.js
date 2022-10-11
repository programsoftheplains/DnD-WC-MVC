const express = require('express')
const router = express.Router()
const inventoryController = require('../controllers/inventory') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, inventoryController.getItems)

router.post('/createItem', inventoryController.createItem)

router.delete('/deleteItem', inventoryController.deleteItem)

module.exports = router