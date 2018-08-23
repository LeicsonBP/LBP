import {openMenu} from './features/menu.js';

const menuButton = $(".header-links-linksToggle");

$(".header-links").click(() => {
	openMenu._toggleMenu();
	menuButton.toggleClass('rotate180');
});