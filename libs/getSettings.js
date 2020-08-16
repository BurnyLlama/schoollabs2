const fs = require('fs')

module.exports = () => {
    const data = fs.readFileSync('./static/settings.json')
    const settings = JSON.parse(data)
    return settings
}