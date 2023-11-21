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

	// Consultar API

	var url = 'https://jsonplaceholder.typicode.com/posts';
	
	fetch(url).then(response => {
		return response.json();
	})
	.then(data =>  {
		data = data.filter(entry => entry.id < 4).slice(0, 100);
		data.forEach(post => {
			const postData = 
			`<li class="entrada p-8 rounded-lg flex flex-col justify-between">
				<h4>${post.title}</h4>
				<p class='mb-3'>${post.body}</p>
				<a href="#">Learn more</a>
			</li>`
			;
			document.getElementById('blogPosts').insertAdjacentHTML('beforeend', postData);
		})
	}).catch(function(err) {
		console.log('No data error', err);
	});

	const slides = document.getElementById('precios');
	let buttonsCarrousel = document.getElementById('bullets');
	let buttonsCarrouselTablet = document.getElementById('bulletsTablet');

	buttonsCarrousel.addEventListener("click", e => {
		if (e.target.nodeName === "BUTTON") {
			Array.from(buttonsCarrousel.children).forEach(item =>
				item.classList.remove("activo")
			);
			if (e.target.classList.contains("uno")) {
				slides.style.transform = "translateX(-0%)";
				e.target.classList.add("activo");
			} else if (e.target.classList.contains("dos")) {
				slides.style.transform = "translateX(-103.5%)";
				e.target.classList.add("activo");
			} else if (e.target.classList.contains('tres')){
				slides.style.transform = 'translatex(-207.5%)';
				e.target.classList.add('activo');
			} else if (e.target.classList.contains('cuatro')){
				slides.style.transform = 'translatex(-311.5%)';
				e.target.classList.add('activo');
			}
		}
	});

	buttonsCarrouselTablet.addEventListener("click", e => {
		if (e.target.nodeName === "BUTTON") {
			Array.from(buttonsCarrousel.children).forEach(item =>
				item.classList.remove("activo")
			);
			if (e.target.classList.contains("uno")) {
				slides.style.transform = "translateX(-0%)";
				e.target.classList.add("activo");
			} else if (e.target.classList.contains("dos")) {
				slides.style.transform = "translateX(-101%)";
				e.target.classList.add("activo");
			}
		}
	});
	
}, false);

