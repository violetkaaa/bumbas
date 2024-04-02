let ball;
let bumbas = [];
let mala1;
let mala2;
let mala3;
let mala4;
let platums = 1600;
let augstums = 900;
function setup() {
	new Canvas(platums, augstums);

	ball = new Sprite();
	ball.diameter = 50;
	malas();
	balls();
	bedres()
	ball.color = '#ECDFA6';
	ball.stroke = '#ECDFA6';
	ball.x = platums / 3;
}

function draw() {
	background('#356941');

	if (mouse.presses()) {
		ball.speed = 10;
		ball.moveTo(mouse);
	}
}

function malas() {

	let malasBiezums = 10

	mala1 = new Sprite();
	mala1.x = platums / 2;
	mala1.y = malasBiezums / 2;
	mala1.width = platums;
	mala1.height = malasBiezums;
	mala1.collider = 'static';
	mala1.color = 'brown';
	mala1.stroke = 'brown';

	mala2 = new Sprite();
	mala2.x = platums / 2;
	mala2.y = augstums - malasBiezums / 2;
	mala2.width = platums;
	mala2.height = malasBiezums;
	mala2.collider = 'static';
	mala2.color = 'brown';
	mala2.stroke = 'brown';

	mala3 = new Sprite();
	mala3.x = malasBiezums / 2;
	mala3.y = augstums / 2;
	mala3.width = malasBiezums;
	mala3.height = augstums;
	mala3.collider = 'static';
	mala3.color = 'brown';
	mala3.stroke = 'brown';

	mala4 = new Sprite();
	mala4.x = platums - malasBiezums / 2;
	mala4.y = augstums / 2;
	mala4.width = malasBiezums;
	mala4.height = augstums;
	mala4.collider = 'static';
	mala4.color = 'brown';
	mala4.stroke = 'brown';
}

function balls() {
	let diametrs = 50;
	let krasa = '#5B3745';

	for (let i = 0; i < 5; i++) {
		for (let j = 0; j < i + 1; j++) {
			bumbas[i] = new Sprite()
			bumbas[i].diameter = 50;
			bumbas[i].x = platums / 2 + diametrs * i;
			bumbas[i].y = (augstums / 2) - (diametrs * j) + (diametrs / 2 * i);
			bumbas[i].bounciness = 1;
			bumbas[i].color = krasa;
			bumbas[i].stroke = krasa;

		}
	}

}
function bedres(){
	let berdesDiametrs = 80;
	let bedresKrasa = '#030301';
	
	let bedre1 = new Sprite();
	bedre1.diameter = berdesDiametrs;
	bedre1.x = platums - berdesDiametrs;
	bedre1.y = augstums - berdesDiametrs;
	bedre1.collider = 'static';
	bedre1.color =  bedresKrasa;
	bedre1.stroke = bedresKrasa;

	let bedre2 = new Sprite();
	bedre2.diameter = berdesDiametrs;
	bedre2.x = platums - berdesDiametrs;
	bedre2.y = 0 + berdesDiametrs;
	bedre2.collider = 'static';
	bedre2.color =  bedresKrasa;
	bedre2.stroke = bedresKrasa;
}
