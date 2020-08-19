const fs = require('fs')

module.exports = () => {
    // Read in the settings file.
    const data = fs.readFileSync('./static/settings.json')
    // Parse it.
    const settings = JSON.parse(data)
    // Return the settings as an object.
    return settings
}