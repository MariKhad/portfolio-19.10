const menuBtn = document.querySelector(".header__contacts-burger");
const contacts = document.querySelector('.header__contacts');

menuBtn.addEventListener('click', () => {
	contacts.classList.toggle('open');
});
