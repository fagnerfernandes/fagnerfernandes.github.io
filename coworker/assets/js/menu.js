const menuDrop = document.querySelector('.menu');
const btnMenuOpen = document.querySelector('.btn-menu-open');
const btnMenuClose = document.querySelector('.btn-menu-close');

btnMenuOpen.addEventListener('click', function(){
	menuDrop.classList.add('menu-open');
});

btnMenuClose.addEventListener('click', function(){
	menuDrop.classList.remove('menu-open');
});