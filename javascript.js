// Write your JS in here
let pics = [
	'https://github.com/ickjui/website/blob/84f64813ca547f8904b08e767ff10a6919ea9944/IMG_0267.jpg',
	'IMG_0733.JPG',
	'IMG_2469.jpg'
	
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
