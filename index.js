const njk = require('nunjucks')
const server = require('express')()
const getSettings = require('./libs/getSettings')
const getLang = require('./libs/getLang')

// Loading
console.log('Loading settings...')
const settings = getSettings()
const lang = getLang(settings.defaultLang)
console.log(lang.server.loadingDone)

// Middlewares


// Configs
njk.configure('views', {
    autoescape: true,
    express: server
})

// Routers
server.get('/', (req,res) => res.redirect(`/${settings.defaultLang}`))

server.get('/:lang', (req, res) => {
    res.render('signin.njk', {lang: getLang(req.params.lang).client, school: settings.school})
})

server.listen(settings.server.port, () => console.log(lang.server.started + settings.server.port))