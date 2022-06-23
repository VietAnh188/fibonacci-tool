const express = require('express')
const http = require('http')
const dotenv = require('dotenv')
const path = require('path')
dotenv.config()
const homeRouter = require('./routes/home.router')
const aboutRouter = require('./routes/about.router')

;(() => {
    const app = express()
    const httpServer = http.createServer(app)

    app.set("view engine", "ejs")
    app.set("views", path.join(__dirname, "views"))
    app.use(express.static(path.join(__dirname, "public")))
    app.use("/scripts", express.static(path.join(__dirname, "scripts")))

    app.use(homeRouter.router)
    app.use(aboutRouter.router)

    const port = process.env.PORT || 1808

    httpServer.listen(port, () => {
        console.log(`Server in running in http://${process.env.HOST}:${port}`)
    })
})()