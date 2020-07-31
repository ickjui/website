// Write your JS in here
let pics = [
	'IMG_2109.JPG',
	'IMG_0733.JPG',
	'IMG_2469.jpg',
	'IMG_1974.jpg',
	'IMG_1780.jpg'
	
];

const btn = document.querySelector('button');
const img = document.querySelector('img');
let counter = 1;

btn.addEventListener('click', function() {
	if (counter === pics.length) {
		counter = 0;
	}
	img.src = pics[counter];
	counter = counter + 1;
});
