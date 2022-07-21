import ImageFacebook from './facebook.png';
import ImageYoutube from './youtube.png';
const phoneNumber = "(850) 682-3225";


function createSocials() {
    const socials = document.createElement('div');
    socials.classList.add('socials');

    // icons
    const socialMedia = document.createElement('div');
    socialMedia.classList.add('socialmedia');
    const imgFacebook = new Image();
    imgFacebook.src = ImageFacebook;
    const imgYoutube = new Image();
    imgYoutube.src = ImageYoutube;
    socialMedia.append(imgFacebook);
    socialMedia.append(imgYoutube);

    // phone
    const phone = document.createElement('a');
    phone.href = `tel:${phoneNumber}`;
    phone.textContent = `${phoneNumber}`;

    // bring it together
    socials.append(socialMedia);
    socials.append(phone);
    return socials;
}

export default createSocials;