// console.log( '2D-game-engine.js Loaded' );

// Classes
// var Canvas = {
//     canvas : document.createElement("canvas"),
//     start : function() {
//         this.canvas.width = 480;
//         this.canvas.height = 270;
//         this.stage = this.canvas.getContext("2d");
//         document.body.insertBefore(this.canvas, document.body.childNodes[0]);
//         this.frameNo = 0;
//         this.interval = setInterval(updateGameArea, 20);
//         },
//     clear : function() {
//         this.stage.clearRect(0, 0, this.canvas.width, this.canvas.height);
//     }
// }

var Game = function(){
		this.name = "";
		this.description = "";
		this.currentLevel = 0;
		this.currentPlayer = 1;
		this.currentControl = 1;
		this.framesPerSecond = 24;
		this.currentFrame = 0;
		this.mouse_x = 0;
		this.mouse_y = 0;
		this.players = [];
		this.levels = [];
		this.settings = {};
		this.controls = new Controls();
		var cpu = new Player;
		var player1 = new Player;
		var player2 = new Player;
		this.players.push(cpu); 
		this.players.push(player1); 
		this.players.push(player2); 
}

var Controls = function(){
		this.keyboard = new Keyboard();
		this.mouse = {};
		this.screen = {};
}

var Keyboard = function(){
		this.is_up_btn_Pressed = false;
		this.is_down_btn_Pressed = false;
		this.is_left_btn_Pressed = false;
		this.is_righ_btn_Pressed = false;
		this.is_start_btn_Pressed = false;
		this.is_select_btn_Pressed = false;
		this.is_a_btn_Pressed = false;
		this.is_b_btn_Pressed = false;
		this.is_c_btn_Pressed = false;
		this.is_x_btn_Pressed = false;
		this.is_y_btn_Pressed = false;
		this.is_z_btn_Pressed = false;

		this.getKey = function(value) {
			for(var key in this.keyCode){
				if(this.keyCode[key] == value){
				  // console.log(key+ "|" +value);
				  return key;
				}
			}
			return null;
		};

		this.getControllerButton = function(value) {
			for(var key in this.controllerMap){
				if(this.controllerMap[key] == value){
				  //console.log(key+ "|" +value);
				  return key;
				}
			}
			return null;
		};

		this.getActiveButtons = function(){
			var list = "bleh";
				if(this.is_up_btn_Pressed){ list += " up_btn "};
				if(this.is_down_btn_Pressed){ list += " down_btn "};
				if(this.is_left_btn_Pressed){ list += " left_btn "};
				if(this.is_righ_btn_Pressed){ list += " rigth_btn "};
				if(this.is_start_btn_Pressed){ list += " start_btn "};
				if(this.is_select_btn_Pressed){ list += " select_btn "};
				if(this.is_a_btn_Pressed){ list += " a_btn "};
				if(this.is_b_btn_Pressed){ list += " b_btn "};
				if(this.is_c_btn_Pressed){ list += " c_btn "};
				if(this.is_x_btn_Pressed){ list += " x_btn "};
				if(this.is_y_btn_Pressed){ list += " y_btn "};
				if(this.is_z_btn_Pressed){ list += " z_btn "};
			return list;
		}

	 	this.controllerMap = {
			up_btn : "up",
			down_btn : "down",
			left_btn : "left",
			rigth_btn : "right",
			start_btn : "alt",
			select_btn : "ctrl",
			a_btn : "space",
			b_btn : "shift",
			c_btn : "capsLock",
			x_btn : "x",
			y_btn : "y",
			z_btn : "z"
		}

		this.keyCode = {
		    backspace:8, tab:9, enter:13, shift:16, ctrl:17, alt:18, pauseBreak:19,
		    capsLock:20, escape:27, space:32, pageUp:33, pageDown:34, end:35, home:36,
		    left:37, up:38, right:39, down:40, insert:45, delete:46,
		    0:48, 1:49, 2:50, 3:51, 4:52, 5:53, 6:54, 7:55, 8:56, 9:57,
		    a:65, b:66, c:67, d:68, e:69, f:70, g:71, h:72, i:73, j:74,
		    k:75, l:76, m:77, n:78, o:79, p:80, q:81, r:82, s:83, t:84,
		    u:85, v:86, w:87, x:88, y:89, z:90,
		    leftWindowKey:91, rightWindowKey:92, selectKey:93, 
		    numpad_0:96, numpad_1:97, numpad_2:98, numpad_3:99, numpad_4:100,
		    numpad_5:101, numpad_6:102, numpad_7:103, numpad_8:104, numpad_9:105,
		    multiply:106, add:107, subtract:109, decimalPoint:110, divide:111,
		    f1:112, f2:113, f3:114, f4:115, f5:116, f6:117, 
		    f7:118, f8:119, f9:120, f10:121, f11:122, f12:123,
		    num:144, scrollLock:145, semiColon:186, equalSign:187,
		    comma:188, dash:189, period:190, forwardSlash:191, graveAccent:192, 
		    openBracket:219, backSlash:220, closeBracket:221, singleQuote:22
		};
}

var Player = function(name="player", x=0, y=0, width=0, height=0){
	this.name = arguments.name;
	this.x = 0;
	this.y = 0;
	this.width = 0;
	this.height = 0;
	this.score = 0;
	this.lives = 3;
	this.currentSprite = null;

	this.isColliding = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
}


// var Rectangle = function(x,y,width,height){
// 	this.isRectangle = true;
// 	this.x1 = x;
// 	this.y1 = y;
// 	this.x2 = x + width;
// 	this.y2 = y + height;
// 	this.width = width;
// 	this.heigth = heigth;
// };

var Sprite = function( fileName, isPattern ){
		this.image = null;
		this.pattern = null;
		this.width = null;
		this.height = null;
		this.x = null;
		this.y = null;
		this.animationDelay = 0;
		this.animationIndexCounter = 0;
		this.animationCurrentFrame = 0;

		if(fileName != undefined && fileName != "" && fileName!= null){
			this.image = new Image();
			this.image.src = fileName;
			this.width = this.image.width;
			this.height = this.image.height;

			if( isPattern ){
				this.pattern = stage.createPattern( this.image,"repeat" );
			}
		}
		else{
			console.log('Unable to load the sprite' + fileName);
		}

		this.draw = function(x,y,w,h){
			//Pattern
			if(this.pattern != null){
				stage.fillStyle = this.pattern;
				stage.fillRect(x,y,w,h);
			}
			else{
				//Image
				if(w != undefined || h != undefined){
					stage.drawImage(this.image, x, y, this.image.width, this.image.height);
				}
				else{
					//Stretch
					stage.drawImage(this.image, x, y, w, h);
				}
			}

		};

		this.drawAnimated = function( x, y, spriteSheetIndexArray, size ){
			if( this.animationDelay++ >= 0){

				this.animationDelay = 0;
				this.animationIndexCounter++;

				if( this.animationIndexCounter >= spriteSheetIndexArray.length ){
					this.animationIndexCounter = 0;
					this.animationCurrentFrame = spriteSheetIndexArray[this.animationIndexCounter];
					
					var res = i2xy(this.animationCurrentFrame, this.image.width);
					stage.drawImage(this.image, res[0]*size, res[1]*size, size, size, x, y, size, size);
				}
			}
		};

		this.rotate = function(x, y, angle){
			stage.save();
			stage.translate(x, y);
			stage.rotate(angle * Math.PI/180);
			stage.drawImage(this.image, -(this.image.width/2), -(this.image.height/2) );
			stage.restore();
		};

		this.isCollidingWith = function(otherObject) {
	        var myLeftSide = this.x;
	        var myRightSide = this.x + (this.width);
	        var myTopSide = this.y;
	        var myBottomSide = this.y + (this.height);

	        var theirLeftSide = otherObject.x;
	        var theirRightSide = otherObject.x + (otherObject.width);
	        var theirTopSide = otherObject.y;
	        var theirBottomSide = otherObject.y + (otherObject.height);

	        var crash = true;
	        if ( (myBottomSide < theirTopSide) ||
	        	 (myTopSide > theirBottomSide) ||
	        	 (myRightSide < theirLeftSide) ||
	        	 (myLeftSide > theirRightSide)
	        	) {
	            crash = false;
	        }
	        return crash;
	    };
};






// Methods / Actions
function startGame(){
	// Load in this order 
	createStage();			// 1
	createNewGame();		// 2
	preloadResources();		// 3
	assignResourcesToGame();// 4
	startRenderEngine();	// 5
}

function createStage(){
	window.canvas = document.getElementById('viewport');  //Referes to the HTML canvas
		// canvas.width = canvas.getAttribute('width');
		// canvas.height = canvas.getAttribute('heigth');
		// canvas.x = 0;
		// canavs.y = 0;
		console.log(canvas.x);
	window.stage = canvas.getContext('2d');	//Refers to 2d stage in Canvas
	stage.save();	//Save the canvas state if required
}

function createNewGame(){
	window.game = new Game;	//Create game Global Variable
}

function preloadResources(arrayOfImagesPaths){
	// window.Images = [];
	// for (i = 0; i < videoGame.images.length; i++) {
	// 	eval("var " + videoGame.images[i].name + "= loadImage('" + videoGame.images[i].path + "')");
	// 	// var temp = new Image;
	// 	// temp.name = videoGame.images[i].name;
	// 	// temp.src = videoGame.images[i].path;
	// 	// temp.alt = videoGame.images[i].name;
	// 	Images.push( eval( videoGame.images[i].name ) );
	// }

}

function assignResourcesToGame(){
	// game.players[1].name = "bleh";
	//console.log(game);
}

function startRenderEngine(){
	window.onload = function(){
		// Static Elements


		// START custom logic for each Video Game here
		var net = new Sprite(fileName="images/net.png", isPattern=true);
		var redPaddle = new Sprite(fileName="images/paddle-red.png", isPattern=false);
		var bluePaddle = new Sprite(fileName="images/paddle-blue.png", isPattern=false);
		var ball = new Sprite(fileName="images/ball.png", isPattern=false);

		ball.x =0;
		ball.y =0;


		// Dynamic Elelments
		setInterval( function(){
			//---------------------------
			renderBackground();

			net.draw(400,32,32,32);	//RenderMap(level1, Images, 32);
			redPaddle.draw(100,100, 64,192);
			bluePaddle.draw(736,100, 64,192);
			ball.draw(ball.x,ball.y,32,32);

			ball.x = ball.x +5;
			ball.y = ball.y +5;

			// 	if(ball.isColliding(redPaddle)){ 
			// ball.x = ball.x -5;
			// ball.y = ball.y -5;
			// 	}
			//game.currentFrame ++;
			//console.log(game.currentFrame);

			//---------------------------

		// END custom logic for each Video Game here	
			updateScoreBoard();
			updateGameInfo();
		}, game.framesPerSecond);
	};
}

function renderBackground(){
	// Create a nice blue ski
	// Create gradient
	var grd = stage.createLinearGradient(0, 0, 0, canvas.height);
	grd.addColorStop( 0, "#0092FF" ); 	//blue darker
	grd.addColorStop( 1, "#DCEFFD" );	//blue lighter
	// Fill with gradient
	stage.fillStyle = grd;
	stage.fillRect( 0, 0, canvas.width, canvas.height );
}


function updateScoreBoard(){
	addText( game.currentPlayer + ": " + Math.floor(game.currentFrame/game.framesPerSecond), 10, 40, 30, "Comic Sans MS");
}

function updateGameInfo(){
	addText( "Mouse: " + game.mouse_x + "," + game.mouse_y, 10,80);
	addText( "Keyboard: " + "", 10,100);
}

function addText(text, x, y, fontSize=12, font="Courier New", color="#dddddd"){
	stage.font = fontSize+"px "+ font;
	stage.fillStyle = color;
	//stage.textAlign = "center";
	stage.fillText(text, x, y); 
}

function isColliding(object1, object2){
	// Axis-Aligned Bounding Box
	/*
	One of the simpler forms of collision detection is between two rectangles that are axis aligned 
	— meaning no rotation. The algorithm works by ensuring there is no gap between any of the 4 sides
	 of the rectangles. Any gap means a collision does not exist.
	*/
	var temp = false;
	// var object1 = {x: 5, y: 5, width: 50, height: 50}
	// var object2 = {x: 20, y: 10, width: 10, height: 10}
	if (object1.x < object2.x + object2.width &&
	   object1.x + object1.width > object2.x &&
	   object1.y < object2.y + object2.height &&
	   object1.height + object1.y > object2.y) {
	    // collision detected!
		temp = true;
	}else{
		temp = false;
	}
	return temp;
}

var RenderMap = function(arrMap, Images, tileSize){
	var x=0;
	var y=0;
	for(var row=0; row < arrMap.length; row++){
		for(var column=0; column < arrMap[row].length; column++){
			//replace by switch statement
			switch ( arrMap[row][column] ){
				case 0:
					stage.drawImage(Images[0], x, y, tileSize,tileSize);
				break;
				case 1:
					stage.drawImage(Images[1], x, y, tileSize,tileSize);
				break;
				case 2:
					stage.drawImage(Images[2], x, y, tileSize,tileSize);
				break;								
			}
			// if(arrMap[row][column]===0){
			// 	stage.drawImage(Images[1], x, y, tileSize,tileSize);
			// 	  //console.log(Images[0].image);
			// }
			// if(arrMap[row][column]===1){
			// 	//stage.drawImage(Images[0].image, x, y, tileSize,tileSize);
			// }
			x += tileSize;
		}
		x  =  0;
		y += tileSize;
	}
}


// Rendering Helpers
var keyboardStatusAtFrame = [
		{right: false},
		{up: false},
		{left: false},
		{down: false}
	];
var controller = [
		{right: false},
		{up: false},
		{left: false},
		{down: false}
	];
var mouse = [
		{right: false},
		{up: false},
		{left: false},
		{down: false}
	];

var keyControllerMap = function( fileName, isPattern ){
    this.right = null;
    return this;
}

// Controllers
document.onkeydown = function(event) { 
    var keyName = game.controls.keyboard.getKey(event.keyCode);
    var controllerEquivalent = game.controls.keyboard.getControllerButton(keyName);
    game.controls.keyboard[ controllerEquivalent ] == true;
}
document.onkeyup = function(event) { 
    var keyName = game.controls.keyboard.getKey(event.keyCode);
    var controllerEquivalent = game.controls.keyboard.getControllerButton(keyName);
    game.controls.keyboard[ controllerEquivalent ] == false;
}


document.onmousemove  = function(event){
    // console.log( "x:" + event.clientX +" | " + "y:" + event.clientX );
    game.mouse_x = event.clientX;
    game.mouse_y = event.clientY;

};
document.mousedown = function( event ){

};
document.mouseup = function( event ){

};
document.mousemove = function( event ){

};
document.click = function( event ){

};
document.dblclick = function( event ){

};
document.mouseover = function( event ){

};
document.mouseout = function( event ){

};
document.mouseenter = function( event ){

};
document.mouseleave = function( event ){

};
document.contextmenu = function( event ){

};

// Animation
window.animationEngine = ( function(){
	return 	window.requestAnimationFrame		||
			window.webkitRequestAnimationFrame	||
			window.mozRequestAnimationFrame		||
			window.oRequestAnimationFrame		||
			window.msRequestAnimationFrame		||
			function(/* function */ callback, /* DOMElement */ element){
				window.setTimeout(callback, 1000 / 60 );
			}
})();


// // Helper Functions
// function wait(ms){
//    var start = new Date().getTime();
//    var end = start;
//    while(end < start + ms) {
//      end = new Date().getTime();
//   }
// }

// function loadImage(path){
//   img = new Image();
//   img.src = path;
//   return img;
// }

// function i2xy(index,mapWidth){
//   var x = index % mapWidth;
//   var y = Math.floor(index/mapWidth);
//   return [x,y];
// }

// function xy2i(x,y,mapWidth){
//   return y* mapWidth + x;
// }
