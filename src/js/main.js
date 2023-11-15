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
			`<li class="entrada p-8 rounded-lg">
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

}, false);

