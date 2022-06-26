class AboutController {
    constructor() {
        [this.renderPage].forEach(method => {
            method.bind(this)
        })
    }

    renderPage(req, res) {
        return res.render('index', {
            path: req.path
        })
    }
}

// module.exports = AboutController
export default AboutController