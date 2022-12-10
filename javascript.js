let toggle = document.getElementsByClassName("toggle-btn")[0]

let navBarLinks = document.getElementById("nav-links")



toggle.addEventListener('click', () => {
    const visibility = navBarLinks.getAttribute("data-visible")

    if (visibility === "false")

    navBarLinks.setAttribute("data-visible", true)
    
    else if (visibilty = "true")

    navBarLinks.setAttribute("data-visible", false)
})

console.log(toggle)
console.log(navBarLinks)

