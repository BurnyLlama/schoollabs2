const { Router } = require("express");

const router = require('express').Router()
const getSettings = require('../libs/getSettings')
const settings = getSettings()
const getLang = require('../libs/getLang')

router.get('/', (req,res) => res.redirect(`/login/${settings.defaultLang}`))
router.get('/login', (req,res) => res.redirect(`/login/${settings.defaultLang}`))

router.get('/login/:lang', (req, res) => 
    res.render('pages/signin.njk', {lang: getLang(req.params.lang).client, school: settings.school})
)

module.exports = router