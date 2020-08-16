const njk = require('nunjucks')
const express = require('express')
const server = express()
const getSettings = require('./libs/getSettings')
const getLang = require('./libs/getLang')

// Loading
console.log('Loading settings...')
const settings = getSettings()
const lang = getLang(settings.defaultLang)
console.log(lang.server.loadingDone)

// Middlewares


// Configs, etc.
njk.configure('views', {
    autoescape: true,
    express: server
})
server.use(express.static('static'))


// Routers
server.get('/', (req,res) => res.redirect(`/login/${settings.defaultLang}`))
server.get('/login', (req,res) => res.redirect(`/login/${settings.defaultLang}`))

server.get('/login/:lang', (req, res) => {
    res.render('pages/signin.njk', {lang: getLang(req.params.lang).client, school: settings.school})
})

server.get('/about/:lang', (req, res) => {
    res.render('pages/about.njk', {lang: getLang(req.params.lang).client, school: settings.school})
})

server.listen(settings.server.port, () => console.log(lang.server.started + settings.server.port))