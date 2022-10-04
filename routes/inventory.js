const express = require('express')
const router = express.Router()
const inventoryController = require('../controllers/inventory') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, inventoryController.getItems)

router.post('/createTodo', inventoryController.createItem)

router.put('/markComplete', inventoryController.markComplete)

router.put('/markIncomplete', inventoryController.markIncomplete)

router.delete('/deleteTodo', inventoryController.deleteItem)

module.exports = router