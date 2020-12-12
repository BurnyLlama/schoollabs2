const router = require('express').Router()
const getSettings = require('../libs/getSettings')
const settings = getSettings()
const getLang = require('../libs/getLang')

// Everything in here will be under '/about'.

router.get('/:lang', (req, res) =>
    res.render('pages/about.njk', {lang: getLang(req.params.lang).client, school: settings.school})
)

module.exports = router