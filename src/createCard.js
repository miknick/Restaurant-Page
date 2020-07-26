const createCard = (name, imageLink, info) => {
    const menu = document.querySelector("#menu")
    const div = document.createElement("div")
    div.classList.add("cake")
    const title = document.createElement("h1")
    const image = document.createElement("img")
    const text = document.createElement("p")
    title.innerHTML = name
    image.src = imageLink
    text.innerHTML = info
    div.appendChild(title)
    div.appendChild(image)
    div.appendChild(text)
    menu.appendChild(div)

}
export { createCard }