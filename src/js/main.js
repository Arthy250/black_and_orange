document.addEventListener('DOMContentLoaded', function() {

	// Show mobile menu
	let burguerButton = document.getElementById('burguerMenu');
	var burguerMenu = document.getElementById("mobileMenu");
	
	burguerButton.addEventListener("click", () => {

		if (burguerMenu.classList.contains("visible")) {
			burguerMenu.classList.remove("visible");
			// do something here if the class exists
		} else {
			burguerMenu.classList.add("visible");
			// do something else here if the class does not exist
		}
	});

}, false);

