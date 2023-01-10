(function (){
	const menuBtn = document.querySelector('.navbar-toggler');
	let menuOpen = false;
	menuBtn.addEventListener('click', () => {
		if(!menuOpen) {
			menuBtn.classList.add('open');
			menuOpen = true;
		} else {
			menuBtn.classList.remove('open');
			menuOpen = false;
		}
	});
})();