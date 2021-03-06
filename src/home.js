import createSocials from './socials';

import './style.css';

function createHero() {
    const hero = document.createElement('div');
    hero.classList.add("hero");

    const heroTitle = document.createElement('h1');
    heroTitle.textContent = "Hideaway  Pizza";
    const heroTagline = document.createElement('h2');
    heroTagline.textContent = "WHERE WE MAKE IT FROM SCRATCH";

    hero.append(heroTitle);
    hero.append(heroTagline);
    return hero;
}



function createBlurb(textHeading, textParagraph) {
    const div = document.createElement('div');
    div.classList.add("about");

    const heading = document.createElement('h2');
    heading.textContent = textHeading;

    const paragraph = document.createElement('p');
    paragraph.textContent = textParagraph;

    div.append(heading);
    div.append(paragraph);
    return div;
}



function initializePage() {
    const main = document.querySelector('main');
    while (main.firstChild) main.removeChild(main.firstChild);

    main.append(createHero());
    main.append(createSocials());

    main.append(createBlurb("Homemade Pizza", "We're a company founded on the philosophy that everything tastes better when made from scratch. At Hideaway Pizza in Crestview, FL, we’re the area's most popular choice for enjoying gourmet, homemade pizza in a relaxing atmosphere. We take pride in delivering delicious food made with fresh, quality ingredients, and every item on our menu is made fresh every day. Our diverse menu, including sandwiches, pasta, and Stromboli, has something or everyone to enjoy—all made with the homemade touch you know and love."));
    main.append(createBlurb("Personable and Friendly Service", "It's our mission to provide personable and friendly service during every customer interaction, and we’ve cultivated a reputation as a business that believes in going the extra mile in everything we do. Whether you stop by for a quick lunch during the work week or a sit-down meal with the family, your experience will be nothing but pleasant from the moment you walk in the door. When on the hunt for the perfect meal for any occasion, Hideaway Pizza in Okaloosa County is the answer. For questions regarding our menu or to place a take-out order, call our restaurant today to speak with a friendly team member. You can also reach out to us through our website, we’re more than happy to answer your questions."));
}

export default initializePage;