let ball;
let bumbas = [];
let mala1;
let mala2;
let mala3;
let mala4;
let platums = 900
let augstums = 800;
function setup() {
	new Canvas(platums, augstums);

	ball = new Sprite();
	ball.diameter = 50;

diametrs = 50;
for (let i = 0; i < 10; i++) {
		bumbas[i]= new Sprite()
		bumbas[i].diameter = 50;
		bumbas[i].x = 500 + i * diametrs;
		bumbas[i].y = 300 + (i % 2) * diametrs;
		bumbas[i].bounciness = 1;

		let malasBiezums = 10
		mala1 = new Sprite();
		mala1.x = platums / 2;
		mala1.y = malasBiezums / 2;
		mala1.width = platums;
		mala1.height = malasBiezums;
		mala1.collider = 'static';

		mala2 = new Sprite();
		mala2.x = platums / 2;
		mala2.y = augstums - malasBiezums / 2;
		mala2.width = platums;
		mala2.height = malasBiezums;
		mala2.collider = 'static';

		
		mala3 = new Sprite();
		mala3.x = malasBiezums / 2;
		mala3.y = augstums / 2;
		mala3.width = malasBiezums;
		mala3.height = augstums;
		mala3.collider = 'static';

		mala4 = new Sprite();
		mala4.x = platums - malasBiezums / 2;
		mala4.y = augstums / 2;
		mala4.width = malasBiezums;
		mala4.height = augstums;
		mala4.collider = 'static';


	}
}

function draw() {	
	background('skyblue');

	if (mouse.presses()) {
		ball.speed = 10;
		ball.moveTo(mouse);
	}
}
