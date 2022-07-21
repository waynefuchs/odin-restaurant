import ImageLogo from './hideaway-pizza-logo.png';

function createNav(location) {
    const nav = document.createElement('nav');

    const linkHome = document.createElement('a');
    linkHome.href = "./";
    linkHome.textContent = "Home";
    if(location === "home") linkHome.classList.add('selected');

    const linkMenu = document.createElement('a');
    linkMenu.href = "./menu";
    linkMenu.textContent = "Menu";
    if(location === "menu") linkMenu.classList.add('selected');

    const linkContact = document.createElement('a');
    linkContact.href = "./contact";
    linkContact.textContent = "Contact";
    if(location === "contact") linkContact.classList.add('selected');

    nav.append(linkHome);
    nav.append(linkMenu);
    nav.append(linkContact);
    return nav;
}

function createHeader() {
    const header = document.createElement('header');
    const imgLogo = new Image();
    imgLogo.src = ImageLogo;
    header.append(imgLogo);
    header.append(createNav('home'));
    return header;
}

export default createHeader;