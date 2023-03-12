import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js';


const menuBtn = document.querySelector(".header__contacts-burger");
const contacts = document.querySelector('.header__contacts');

menuBtn.addEventListener('click', () => {
	contacts.classList.toggle('open');
});

const swiper = new Swiper('.swiper', {
	navigation: {
		nextEl: '.portfolio__arrow--right',
		prevEl: '.portfolio__arrow--left',
		disabledClass: "portfolio__arrow--disable",
		// when window width is >= 640px
		/* 640: {
			slidesPerView: 4,
			spaceBetween: 40
		} */
	},
	breakpoints: {
		// when window width is >= 480px
		480: {
			grid: {
				fill: 'row',
				rows: 2,
			}
		},
		768: {
			slidesPerView: 2,
			grid: {
				fill: 'row',
				rows: 2,
			}
		},
	},
});

$('.header__contacts-burger').click(() => {
	$('.header__contacts').slideToggle();
})

$('.present__order--btn').click(() => {
	$('.page__overlay--modal').fadeIn(400).css('display', 'flex');
})

$('.modal__close').click(() => {
	$('.page__overlay--modal').fadeOut(400);
})