const router = require('express').Router()
const getSettings = require('../../libs/getSettings')
const settings = getSettings()
const getLang = require('../../libs/getLang')

// Everything in here will be under '/api'.

// Send back settings
router.get('/getSettings', (req, res) =>
    res.status(200).json(settings.school)
)

module.exports = router