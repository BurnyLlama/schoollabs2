// Anonomous async funciton.
(async () => {
    // Fetch the settings.json and parse it.
    const request = await fetch(`/api/getSettings`)
    settings = await request.json()

    // Set the primary and secondary colours.
    document.documentElement.style.setProperty("--primary", settings.primaryColor)
    document.documentElement.style.setProperty("--secondary", settings.secondaryColor)
})()
