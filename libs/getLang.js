const fs = require('fs')

module.exports = (langCode) => {
    // Read in the lang file.
    const data = fs.readFileSync(`./lang/${langCode}.json`)
    // Parse it.
    const lang = JSON.parse(data)
    // Return the parsed object.
    return lang
}