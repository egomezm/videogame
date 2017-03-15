//console.log('helpers.js Loaded');

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

function loadImage(path){
  img = new Image();
  img.src = path;
  return img;
}



// Animation
window.requestAnimFrame = ( function(){
	return 	window.requestAnimationFrame		||
			window.webkitRequestAnimationFrame	||
			window.mozRequestAnimationFrame		||
			window.oRequestAnimationFrame		||
			window.msRequestAnimationFrame		||
			function(/* function */ callback, /* DOMElement */ element){
				window.setTimeout(callback, 1000 / 60 );
			}
})();

function i2xy(index,mapWidth){
  var x = index % mapWidth;
  var y = Math.floor(index/mapWidth);
  return [x,y];
}

function xy2i(x,y,mapWidth){
  return y* mapWidth + x;
}

// Get keyName from Value in a struct
Object.prototype.getKey = function(value){
  for(var key in this){
    if(this[key] == value){
      return key;
    }
  }
  return null;
};

function getDayOfWeekName(dayValue){
  
  // switch (new Date().getDay()) {
  //     case 0:
  //         day = "Sunday";
  //         break;
  //     case 1:
  //         day = "Monday";
  //         break;
  //     case 2:
  //         day = "Tuesday";
  //         break;
  //     case 3:
  //         day = "Wednesday";
  //         break;
  //     case 4:
  //         day = "Thursday";
  //         break;
  //     case 5:
  //         day = "Friday";
  //         break;
  //     case 6:
  //         day = "Saturday";
  // }
}