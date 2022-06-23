const express = require('express')
const AboutController = require('../controllers/about.controller')

const router = express.Router()

const aboutCtrl = new AboutController()

router.get('/about', aboutCtrl.renderPage)

module.exports = {
    name: 'about',
    router
}