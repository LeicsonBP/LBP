let links = $(".header-links-list");

export class openMenu {

	static _toggleMenu(){
		links.slideToggle();
		links.toggleClass('flex');
	}

}