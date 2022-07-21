
function initializePage() {
    // Get and clear main const
    const main = document.querySelector('main');
    while (main.firstChild) main.removeChild(main.firstChild);

    const message = document.createElement('p');
    message.textContent = "No soup for you";
    main.append(message);
}

export default initializePage;