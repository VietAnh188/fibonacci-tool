// const express = require('express')
// const http = require('http')
// const dotenv = require('dotenv')
// const path = require('path')
// dotenv.config()
// const homeRouter = require('./routes/home.router')
// const aboutRouter = require('./routes/about.router')
import express from 'express'
import http from 'http'
import dotenv from 'dotenv'
import path from 'path'
import homeRouter from './routes/home.router.js'
import aboutRouter from './routes/about.router.js'
import {fileURLToPath} from 'url'

dotenv.config()

;(() => {
    /** @type {string}*/
    const __dirname = path.dirname(fileURLToPath(import.meta.url))
    const app = express()
    const httpServer = http.createServer(app)

    app.set("view engine", "ejs")
    app.set("views", path.join(__dirname, "views"))
    app.use(express.static(path.join(__dirname, "public")))
    app.use("/scripts", express.static(path.join(__dirname, "scripts")))

    app.use(homeRouter.router)
    app.use(aboutRouter.router)

    /** @type {number}*/
    const port = Number(process.env.PORT) || 1808

    httpServer.listen(port, () => {
        console.log(`Server in running in http://${process.env.HOST}:${port}`)
    })
})()