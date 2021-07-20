const express = require('express')
const router = express.Router()
const favoriteController = require('../controllers/favorite.controller')

router.post('/fav', favoriteController.create)
router.get('/fav', favoriteController.getFavList)


module.exports = router;