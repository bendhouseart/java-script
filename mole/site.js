var startStop = false;

var windowWidth = $(window).width();
var windowHeight = $(window).height();

var numOfElementsX = (windowWidth % 103);
var numOfElementsY = (windowHeight % 84);
var coordPrimer = [];
console.log(numOfElementsX, numOfElementsY);
for (var i = 0; i < numOfElementsX; i++){
	for (var j = 0; j < numOfElementsY; j++){
		coordPrimer.push('x' + i + 'y' + j);
	}
}

console.log(coordPrimer);

var catPosition = {};
for (var i = 0; i < coordPrimer.length; i++){
	catPosition[i] = coordPrimer[i];
	$("#catArray").append('<button id="' + catPosition[i] +  '"' + ' class="button"></button>');
}


//console.log(manyCats);
// Here we are assigning id's to integers
//
////var catPosition = {
//	1: "x0y0",
//	2: "x1y0",
//	3: "x2y0",
//	4: "x3y0",
//	5: "x0y1",
//	6: "x1y1",
//	7: "x2y1",
//	8: "x3y1",
//	9: "x0y2",
//	10: "x1y2",
//	11: "x2y2",
//	12: "x3y2"
//};

// test of catPosition dictionary
//console.log(catPosition[1]);
// PASS

// this function generates a random int that is  >= min and < max.
function getRandInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max-min)) + min;
}

// getRandInt TEST
// console.log(getRandInt(3, 10)); 
// PASS

// these two parameters are chosen based on the number
// of locations from which a cat can be whacked
var max = 10;
var min = 1;

// this function will control timing of digdugs or cats or
// whatever poping out of the ground.

var startTime = Date.now(); // This timer will start at execution
var clickedTime;

function clicked() {
	clickedTime = Date.now();
//	console.log(clickedTime);
	return clickedTime;
}


function timeWindow(poppedTime, clickedTime) {
	var hit = false;
	if (clickedTime <= (poppedTime + 200) && clickedTime >= (poppedTime - 200) ) {
		hit = true;
	}
	else {
		hit = false;
	}
	return hit;
};

// Here are the listeners for each button, when clicked the variable 
// clicked time will be recorded. This variable will then be compared 
// to the pop time and if it falls within the defined event window we'll
// later register the hit.

// Game Starts 3 lines below this comment.

//////////////////////////////////////////////////////////////////////////
var score = 0;
var position = '#x0y0';
//console.log(position);	
var myVar = setInterval(change, 500);
//console.log(position);

var catTime = new Array(coordPrimer.length + 1).join('0').split('').map(parseFloat);
var clickTime = new Array(coordPrimer.length + 1).join('0').split('').map(parseFloat);

//console.log(catTime2);
//var catTime = [0,0,0,0,0,0,0,0,0,0,0,0];
//var clickTime = [0,0,0,0,0,0,0,0,0,0,0,0];



function change (position){
	$('#start').click(function () {
	startStop = true;
	});
	$('#stop').click(function () {
		startStop = false;
	});

	if (startStop){
	var i = 0;
	while (i < getRandInt(1, coordPrimer.length + 1)){//13)){
		var randy = getRandInt(1, coordPrimer.length + 1);//13);
		var chooser = catPosition[randy.toString()];
		var chooserJq = '#' + chooser;
		if (catTime[randy - 1] == 0){
			$(chooserJq).css('backgroundImage', 'url(grumpy.png)');
			position = chooser;
			catTime[randy -1] = Date.now();
			console.log(catTime[randy - 1] + ' ' + Date.now());	
		}
	i++;
	}
	for (var i = 0; i < coordPrimer.length; i++){
		var timeNow = Date.now();
		if ((catTime[i] + 2000) <= timeNow){
			catTime[i] = 0;
			$("#" + catPosition[i + 1]).css('backgroundImage', 'url(hole.jpg)');
		}
		
	}			
}
}

function stopFunction() {
	clearInterval(myVar);
}

/////////////////////////////////////////////////////////////////////////
// sound effects
var audio = $("#pew")[0];
var no = $("#no")[0];
$(".button").click(function () {
	var id = $(this).attr('id');
	var backGroundCat = $(this).attr('style');
//	console.log(id);
//	console.log(backGroundCat);
	$('#' + id).css('backgroundImage', 'url(hole.jpg)');
	audio.play();
	console.log($(this).css('backgroundImage'));
	if (backGroundCat === 'background-image: url("grumpy.png");'){
	//	console.log('you killed that cat');
		no.play();
		score += 100;
		console.log(score);
		$('#score').html('Score = ' + score);
	//	$('#' + id).click(function() {
	//		audio.play();
	//	});
	}
});
//////////////////////////////////////////////////////////////////////////


