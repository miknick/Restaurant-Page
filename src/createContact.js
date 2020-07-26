const contact = document.querySelector("#contact")
const createInput = (name, type = "text") => {
    const label = document.createElement("label")
    const input = document.createElement("input")
    const div = document.createElement("div")
    label.style.name = name
    label.innerHTML = name[0].toUpperCase() + name.slice(1) + ":"
    input.style.type = type
    div.appendChild(label)
    div.appendChild(input)
    contact.appendChild(div)
}
const createTextarea = (name, type = "text") => {
    const label = document.createElement("label")
    const textarea = document.createElement("textarea")
    const div = document.createElement("div")
    label.style.name = name
    label.innerHTML = name[0].toUpperCase() + name.slice(1) + ":"
    textarea.style.type = type
    div.appendChild(label)
    div.appendChild(textarea)
    contact.appendChild(div)

}
const createContact = () => {
    createInput("name")
    createInput("e-mail", "email")
    createTextarea("message")
    const button = document.createElement("button")
    button.innerHTML = "Submit"
    contact.appendChild(button)
}
export { createContact }
