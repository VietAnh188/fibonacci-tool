// const express = require('express')
// const HomeController = require('../controllers/home.controller')
import express from 'express'
import HomeController from '../controllers/home.controller.js'

const router = express.Router()

const homeCtrl = new HomeController()

router.get('/', homeCtrl.renderPage)

// module.exports = {
//     name: "/",
//     router
// }

export default {
    name: '/',
    router
}