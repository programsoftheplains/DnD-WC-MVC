const express = require('express')
const router = express.Router()
const homebrewsController = require('../controllers/homebrews')
const { ensureAuth } = require('../middleware/auth')

router.get('/', homebrewsController.getHomebrews)

//router.get('/', ensureAth, homebrewsController.getMyBrews)

//router.post('/', ensureAth, homebrewsController.togglePublicMyBrews)

module.exports = router