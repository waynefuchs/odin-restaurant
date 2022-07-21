import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

import ImageLogo from './hideaway-pizza-logo.png';

function createNav() {
    const nav = document.createElement('nav');

    const linkHome = document.createElement('a');
    linkHome.classList.add('menu-link');
    linkHome.textContent = "Home";
    linkHome.addEventListener("click", (e) => { 
        const menuItems = document.querySelectorAll('.menu-link');
        menuItems.forEach((item) => item.classList.remove('selected'));
        e.target.classList.add('selected');
        loadHome();
    });
    linkHome.classList.add('selected');

    const linkMenu = document.createElement('a');
    linkMenu.classList.add('menu-link');
    linkMenu.textContent = "Menu";
    linkMenu.addEventListener("click", (e) => { 
        const menuItems = document.querySelectorAll('.menu-link');
        menuItems.forEach((item) => item.classList.remove('selected'));
        e.target.classList.add('selected');
        loadMenu(); 
    });

    const linkContact = document.createElement('a');
    linkContact.classList.add('menu-link');
    linkContact.textContent = "Contact";
    linkContact.addEventListener("click", (e) => { 
        const menuItems = document.querySelectorAll('.menu-link');
        menuItems.forEach((item) => item.classList.remove('selected'));
        e.target.classList.add('selected');
        loadContact(); 
    });

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
    header.append(createNav());
    return header;
}

export default createHeader;