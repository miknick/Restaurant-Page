const menu = document.querySelector("#menu")
const menuButton = document.querySelector("#menuButton")
const welcome = document.querySelector("#welcome")
const welcomeButton = document.querySelector("#welcomeButton")
const contact = document.querySelector("#contact")
const contactButton = document.querySelector("#contactButton")
const changeDisplay = (button, displayed, hidden1, hidden2) => {
    button.addEventListener("click", () => {
        hidden1.style.display = "none"
        hidden2.style.display = "none"
        if (displayed === welcome) {
            displayed.style.display = "block"
        }
        else
            displayed.style.display = "flex"

    })
}
const changeButtonColor = (mainbutton, button1, button2) => {
    mainbutton.addEventListener("click", () => {
        mainbutton.style.backgroundColor = "#ec0ca5"
        button1.style.backgroundColor = "#f2ec7c"
        button2.style.backgroundColor = "#f2ec7c"
    })

}
const addAllEvents = () => {
    changeDisplay(menuButton, menu, welcome, contact)
    changeButtonColor(menuButton, welcomeButton, contactButton)
    changeDisplay(welcomeButton, welcome, menu, contact)
    changeButtonColor(welcomeButton, menuButton, contactButton)
    changeDisplay(contactButton, contact, welcome, menu)
    changeButtonColor(contactButton, menuButton, welcomeButton)
}
export { addAllEvents }