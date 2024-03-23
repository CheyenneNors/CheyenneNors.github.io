/*
	Name: Cheyenne Norsworthy
	File: index.html
	Date: 22 March 2024
	Pupose: to test comprehension of JavaScript loop, function, conditionals, and events
*/
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFiles = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg'];

/* Declaring the alternative text for each image file */
const altText = {
	'pic1.jpg': 'Image 1',
	'pic2.jpg': 'Image 2',
	'pic3.jpg': 'Image 3'
};

/* Looping through images */

for (let i = 0; i < imageFiles.length; i++) {
	const newImage = document.createElement('img');
	newImage.setAttribute('src', 'images/' + imageFiles[i]);
	newImage.setAttribute('alt', altText[imageFiles[i]]);

	newImage.addEventListener('click', function() {
		const src = this.getAttribute('src');
		const alt = this.getAttribute('alt');
		document.querySelector('.displayed-img').setAttribute('src', src);
		document.querySelector('.displayed-img').setAttribute('alt', alt);
	});

	thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function() {
	if (btn.getAttribute('class') === 'dark') {
		btn.setAttribute('class', 'light');
		btn.textContent = 'Lighten';
		overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)';
	} else {
		btn.setAttribute('class', 'dark');
		btn.textContent = 'Darken';
		overlay.style.backgroundColor = '0 0 0 / 0%)';
	}
});