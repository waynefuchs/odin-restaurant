import createSocials from './socials';

function initializePage() {
    const main = document.querySelector('main');
    while (main.firstChild) main.removeChild(main.firstChild);

    main.append(createSocials());
}

export default initializePage;