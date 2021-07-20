const express = require('express')
const router = express.Router()
const personalController = require('../controllers/personal.controller')

router.post('/personal', personalController.create)
router.get('/personal', personalController.getPersonalList)


module.exports = router;