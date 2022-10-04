const express = require('express')
const router = express.Router()
const characterController = require('../controllers/characters')
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, characterController.getCharacters)

router.post('/createCharacter', characterController.createCharacter)

router.put('/copyCharacter', characterController.copyCharacter)

router.put('/editCharName', characterController.editCharName)

router.delete('/deleteCharacter', characterController.deleteCharacter)

module.exports = router