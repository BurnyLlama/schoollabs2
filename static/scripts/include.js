// Select all elements that wants to include data, for each of them ...
document.querySelectorAll("[data-include]").forEach(element =>
    // ... fetch the data they want to include
    fetch(element.getAttribute("data-include")).then(data =>
        // turn it into text
        data.text().then(text => {
            // set the innerHTML of the element to the text
            element.innerHTML = text
            // If the element wants to include an svg, also remove the style-attribute 
            // so that you can style the fill with css. (It is impossible if it is defined inline.)
            if (element.getAttribute("data-include").includes("svg")) element.querySelector("path").removeAttribute("style")
        }).catch(err =>
            console.error(err)
        )
    ).catch(err =>
        console.error(err)
    )
)