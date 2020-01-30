const menuDrop = document.querySelector('.menu');
const btnMenuOpen = document.querySelector('.btn-menu-open');
const btnMenuClose = document.querySelector('.btn-menu-close');

const followPhotos = document.querySelector('a.followPhotos');
const followLocation = document.querySelector('a.followLocation');
const followPrice = document.querySelector('a.followPrice');

btnMenuOpen.addEventListener('click', function(){
	menuDrop.classList.add('menu-open');
});

btnMenuClose.addEventListener('click', function(){
	menuDrop.classList.remove('menu-open');
});

followPhotos.addEventListener('click', function(){
	menuDrop.classList.remove('menu-open');
});

followLocation.addEventListener('click', function(){
	menuDrop.classList.remove('menu-open');
});

followPrice.addEventListener('click', function(){
	menuDrop.classList.remove('menu-open');
});