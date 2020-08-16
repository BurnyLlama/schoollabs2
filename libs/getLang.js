const fs = require('fs')

module.exports = (langCode) => {
    const data = fs.readFileSync(`./static/lang/${langCode}.json`)
    const lang = JSON.parse(data)
    return lang
}