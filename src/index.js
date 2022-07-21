import createHeader from './header';
import createMain from './main';
import createFooter from './footer';


import loadHome from './home';
import loadMenu from './menu';

const content = document.querySelector("#content");
content.append(createHeader());
content.append(createMain());
content.append(createFooter());

loadHome();

console.log("index.js loaded.")

