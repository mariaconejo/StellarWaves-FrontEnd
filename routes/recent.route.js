const express = require('express')
const router = express.Router()
const recentController = require('../controllers/recent.controller')

router.post('/rect', recentController.create)
router.get('/rect', recentController.getRectList)


module.exports = router;