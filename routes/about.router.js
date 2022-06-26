// const express = require('express')
// const AboutController = require('../controllers/about.controller')
import express from 'express'
import AboutController from '../controllers/about.controller.js'

const router = express.Router()

const aboutCtrl = new AboutController()

router.get('/about', aboutCtrl.renderPage)

// module.exports = {
//     name: 'about',
//     router
// }
export default {
    name: 'about',
    router
}