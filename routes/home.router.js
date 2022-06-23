const express = require('express')
const HomeController = require('../controllers/home.controller')

const router = express.Router()

const homeCtrl = new HomeController()

router.get('/', homeCtrl.renderPage)

module.exports = {
    name: "/",
    router
}