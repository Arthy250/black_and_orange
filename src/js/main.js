document.addEventListener('DOMContentLoaded', function() {

	// Show mobile menu
	let burguerButton = document.getElementById('burguerMenu');
	var burguerMenu = document.getElementById("mobileMenu");
	
	burguerButton.addEventListener("click", () => {
		if (burguerMenu.classList.contains("visible")) {
			burguerMenu.classList.remove("visible");
		} else {
			burguerMenu.classList.add("visible");
		}
	});

}, false);

