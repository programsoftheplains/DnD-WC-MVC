const express = require('express')
const router = express.Router()
const inventoryController = require('../controllers/inventory') 
const { ensureAuth } = require('../middleware/auth')

router.get('/:cid', ensureAuth, inventoryController.getItems)

router.post('/createItem/:cid', inventoryController.createItem)

router.put('/editItem/:id' , inventoryController.editItem)

//router.post('/findItem/:cid', inventoryController.findItem)

router.delete('/deleteItem', inventoryController.deleteItem)

module.exports = router