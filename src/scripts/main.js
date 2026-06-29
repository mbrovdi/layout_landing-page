'use strict';

const menu = document.querySelector('.menu');
const burgerButton = document.querySelector('.icon--burger');
const closeButton = document.querySelector('.menu__close');
const menuLinks = document.querySelectorAll('.menu__link');

if (menu && burgerButton && closeButton) {
	const toggleMenu = (shouldOpen) => {
		menu.classList.toggle('is-open', shouldOpen);
		menu.setAttribute('aria-hidden', String(!shouldOpen));
		burgerButton.setAttribute('aria-expanded', String(shouldOpen));
		document.body.classList.toggle('body--menu-open', shouldOpen);
	};

	burgerButton.addEventListener('click', () => toggleMenu(true));
	closeButton.addEventListener('click', () => toggleMenu(false));

	menuLinks.forEach((link) => {
		link.addEventListener('click', () => toggleMenu(false));
	});

	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape') {
			toggleMenu(false);
		}
	});
}
