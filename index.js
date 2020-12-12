/*
    Package imports
*/
// Express
const express = require('express')
const server = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
// Nunjucks
const njk = require('nunjucks')
// 'Local' libs
const getSettings = require('./libs/getSettings')
const getLang = require('./libs/getLang')

/*
    Loading
*/
console.log('Loading settings...')
const settings = getSettings()
const lang = getLang(settings.defaultLang)
console.log(lang.server.loadingDone)

/*
    Middlewares
*/
server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(cookieParser())

/*
    Configs, etc.
*/
njk.configure('views', {
    autoescape: true,
    express: server
})
// Use the 'statc' folder to serve static files like css, scripts and images.
server.use(express.static('static'))

/*
    ROUTES
*/
// Login pages... (Login pages are not top-level, but they redirect from top-level)
server.use('/', require('./routes/login'))

// About pages, might include policies and such in the future.
server.use('/about', require('./routes/about'))

// The APi
server.use('/api', require('./routes/api/api'))


server.listen(settings.server.port, () => console.log(lang.server.started + settings.server.port))