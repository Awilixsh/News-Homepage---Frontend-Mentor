function openMenu(){
	const buttonHamburger = document.getElementById('imgBurger-mobile');
	const bgOverlay = document.getElementById('bgOverlay');
	const navBar = document.getElementById('navMain');
	buttonHamburger.style.display = 'none';
	bgOverlay.style.display = 'block';
	navBar.style.display = 'grid';
}

function closeMenu(){
	const buttonHamburger = document.getElementById('imgBurger-mobile');
	const bgOverlay = document.getElementById('bgOverlay');
	const navBar = document.getElementById('navMain');
	buttonHamburger.style.display = 'block';
	bgOverlay.style.display = 'none';
	navBar.style.display = 'none';
}