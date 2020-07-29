// Write your JS in here
let pics = [
	'/Users/jlockin/Documents/clapping.gif',
	'/Users/jlockin/Documents/bushes.gif',
	'/Users/jlockin/Documents/skramps.png',
	'/Users/jlockin/Documents/smcbbs.jpeg'
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
