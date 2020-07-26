const createWelcome = () => {
    const welcome = document.querySelector("#welcome")
    const text = document.createElement("p")
    const h1 = document.createElement("h1")
    h1.innerHTML = "Best Bakery in Town "
    text.innerHTML = `Sweet Cake Shop & Bakery has created stunning, creative 
    wedding cakes;luscious cookies, cupcakes, pastries and quick breads; and delightfully 
    customized confections for all of life’s celebrations.

    We’ve served generations of town residents – in fact, we can declare 
    that if you’ve been to any festivity in town, you’ve surely experienced 
    the specialty desserts that we’re proud to call our own.
    See us today to start collaborating on a one-of-a-kind dessert for 
    your wedding, graduation, birthday or other party. Or, just stop by for
     an exceptional little surprise sure to please your friends and family – simply for 
     no reason other to say ‘I love you.’
    We serve the town metro area or anywhere statewide. And, we’ll deliver – 
    wherever you are in World!`
    welcome.appendChild(h1)
    welcome.appendChild(text)
}
export { createWelcome }
