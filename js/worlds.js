// console.log('worlds.js Loaded');

// var tiles = {
//      0: "grass",
//      1: "mario",
//      2: "sand",
//      3: "ski",
//      4: "grass",
//      5: "grass",
//      6: "grass",
//      7: "grass",
//      8: "grass",
//      9: "grass"
//  };

var world01 = [
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];


// Classes
// var World = function(width, height){
// 	this.mx = 0;
// 	this.my = 0;
// 	this.width = arguments.width;
// 	this.height = arguments.height;
// 	this.map = null;

// 	this.draw = function(){
// 		for (var y = 0; y < this.height; y++){
// 			for (var x = 0; x < this.width; x++){
// 				var id = this.map[ x + ( y * this.width ) ];
// 				if( id==0 ) continue;
// 				sprites[id].draw( this.mx + ( x * width ), this.my + ( y * height ) ); 
// 			}
// 		}
// 	}

// };

// var Player = function(){
// 	//Properties / Status or attributes
// 	this.position_x = 0;
// 	this.position_y = 0;
// 	this.with = 0;
// 	this.height = 0;
// 	this.currentSatus = 0;

// 	//Methods / Actions
// 	function moveLeft(){

// 	}
// 	function moveRight(){

// 	}
// 	function moveUp(){

// 	}	
// 	function moveDown(){

// 	}

// }

// function positionPlayer(){
// 	if(keyboardStatusAtFrame['right']){ player.position_x += 3; }
// 	if(keyboardStatusAtFrame['up']){ player.position_y += -3; }
// 	if(keyboardStatusAtFrame['left']){ player.position_x += -3; }
// 	if(keyboardStatusAtFrame['down']){ player.position_y += 3; }
// }

